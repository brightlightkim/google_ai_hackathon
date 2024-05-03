import datetime
import os.path
import csv
import ics
import os
import json

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/calendar"]

# credentials.json이랑 gemini_response.json 실행하려면 필요합니다! 
def calendarAPI():
  
  creds = None
  # The file token.json stores the user's access and refresh tokens, and is
  # created automatically when the authorization flow completes for the first
  # time.
  if os.path.exists("token.json"):
    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          "credentials.json", SCOPES
      )
      creds = flow.run_local_server(port=0)
      
    # Save the credentials for the next run
    with open("token.json", "w") as token:
      token.write(creds.to_json())
      
  # gemini.json 파일에서 데이터 읽어오기
  with open('gemini_response.json', 'r') as file:
    gemini_data = json.load(file)

 

  try:
    service = build("calendar", "v3", credentials=creds)
    
    new_calendar = {
      'summary': "New Travel Plan"
    }
    created_calendar = service.calendars().insert(body=new_calendar).execute()
    
    addEventForJson(creds, gemini_data, created_calendar["id"])
    

    
    # 이벤트 목록 가져오기
    events_result = service.events().list(calendarId=created_calendar["id"], maxResults=30).execute()
    events = events_result.get('items', [])

    # 이벤트 데이터를 csv 파일로 저장
    with open('calendar_events.csv', mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Summary', 'Start Time', 'End Time'])
        for event in events:
            summary = event['summary']
            start_time = event['start'].get('dateTime', event['start'].get('date'))
            end_time = event['end'].get('dateTime', event['end'].get('date'))
            writer.writerow([summary, start_time, end_time])
    
    # 캘린더 데이터를 ics 파일로 저장 
    calendar = ics.Calendar()

    for event in events:
      event_start = event['start'].get('dateTime', event['start'].get('date'))
      event_end = event['end'].get('dateTime', event['end'].get('date'))
      event_summary = event['summary']
      
      event = ics.Event(name=event_summary, begin=event_start, end=event_end)
      calendar.events.add(event)
    ics_data = str(calendar)
    with open('calendar.ics', 'w') as file:
      file.write(ics_data)

    

  except HttpError as error:
    print(f"An error occurred: {error}")
  
  
  # add calendar event from curret time for length of 'duration'
def addEvent(creds, start_time, end_time, description, id):
  # 현재 시간의 타임존 정보 가져오기
  event = {
      'summary': description,
      'start': {
          'dateTime': start_time.isoformat(),
          'timeZone': "America/Los_Angeles"
      },
      'end': {
          'dateTime': end_time.isoformat(),
          'timeZone': "America/Los_Angeles"
          
      },
  }

  service = build('calendar', 'v3', credentials=creds)
  event = service.events().insert(calendarId=id, body=event).execute()
  print('Event created: %s' % (event.get('htmlLink')))
  


def addEventForJson(creds, json_data, id):
  prev_end_time = None
  now = datetime.datetime.now()
  year = int(now.year)
  month = int(now.month)
  day = int(now.day)
  hour = int(now.hour)
  minute = int(now.minute)
  # plan_title = json_data["travel_summary"]["plan_title"]
  
  
  for day, activities in json_data["Daily Planner"].items():
    for activity, details in reversed(activities.items()):
      if activity == "Date":
        continue
      if activity in ["Breakfast", "Lunch", "Dinner"]:
        name = f"{activity}: {details['Menu']}"
      else:
        name = details['Name']
      
      
      
      if "." in activities["Date"]:
        date_parts = activities["Date"].split('.')
        year = int(date_parts[0])
        month = int(date_parts[1])
        day = int(date_parts[2])

      # 시간과 AM/PM을 분리
      if " " in details['Time']:
        time_parts = details['Time'].split(" ")
        time = time_parts[0]
        am_pm = time_parts[1]
      
      # 시와 분을 추출
      if ":" in time:
        hour, minute = map(int, time.split(":"))
      
      # PM일 경우 시간을 조정
      if am_pm == "PM" and hour != 12:
          hour += 12
      
      start_time = datetime.datetime(year, month, day, hour, minute, 0)
      if prev_end_time:
        # 이전 활동의 종료 시간이 있을 경우 다음 활동의 시작 시간으로 설정
        end_time = prev_end_time
      else:
        end_time = start_time + datetime.timedelta(hours=1)
        
      # description 설정
      if 'Type' in details:
        event_description = f"{details['Type']} - {details['Price']}"
      else:
        event_description = f"Meal- {details['Price']}"
      
      event = {
        'summary': name,
        'start': {
          'dateTime': start_time.isoformat(),
          'timeZone': details['Time Zone']
        },
        'end': {
          'dateTime': end_time.isoformat(),
          'timeZone': details['Time Zone']
        },
        'location': details['Location'],
        'description': event_description
      }
      
      prev_end_time = start_time
      service = build('calendar', 'v3', credentials=creds)
      event = service.events().insert(calendarId=id, body=event).execute()
    # reset it for other days 
    prev_end_time = None
    
    

    # 다가오는 이벤트 10개 가져오기
    # addEvent(creds, start_time, end_time, "Hello Saehee", created_calendar["id"])
    
    # # Call the Calendar API
    # now = datetime.datetime.utcnow().isoformat() + "Z"  # 'Z' indicates UTC time
    # print("Getting the upcoming 10 events")
    # events_result = (
    #     service.events()
    #     .list(
    #         calendarId = created_calendar["id"],
    #         timeMin=now,
    #         maxResults=10,
    #         singleEvents=True,
    #         orderBy="startTime",
    #     )
    #     .execute()
    # )
    # events = events_result.get("items", [])

    # if not events:
    #   print("No upcoming events found.")
    #   return

    # # Prints the start and name of the next 10 events
    # for event in events:
    #   start = event["start"].get("dateTime", event["start"].get("date"))
    #   print(start, event["summary"])
  
  



if __name__ == "__main__":
  calendarAPI()