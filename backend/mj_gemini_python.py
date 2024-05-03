#pip3 install google-generativeai

import google.generativeai as genai
import json
import sys
import requests

GOOGLE_API_KEY = 'AIzaSyAS8q0pLXpfxphdQ-uj9IwyULKhlEHkDFQ'


genai.configure(api_key=GOOGLE_API_KEY)

# Set up the model
generation_config = {
  "temperature": 0.7,
  "top_p": 0.8,
  "top_k": 35,
  "max_output_tokens": 2048,
}

model = genai.GenerativeModel('gemini-pro',
                             generation_config=generation_config)


example_prompt = {
  "Travel Summary": {
    "plan_title": "Tokyo Adventure with Friends (June 6-8, 2024)",
    "destination": "Tokyo, Japan",
    "departure_place": "South Korea",
    "travel_dates": {
      "date_from": "2024.6.6",
      "date_to": "2024.6.10"
    },
    "travel_with": "friends, 23 years old",
    "theme_of_trip": "Visiting Disneyland and Tokyo Tower"
  },
  "Recommand Clothes": {
    "Top": "Light and breathable fabrics suitable for Tokyo's summer weather, considering visits to Disneyland and Tokyo.",
    "Bottom": "Comfortable shorts or pants for walking around the theme parks, and a dressier outfit for any evening activities.",
    "Shoes": "Comfortable sneakers for walking in the theme parks and exploring Tokyo, and dress shoes for any evening outings."
  },
  "Daily Planner": {
    "Day 1": {
      "Date": "2024.06.06",
      "Breakfast": {
        "Time": "8:00 AM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Hotel or local bakery in Tokyo",
        "Menu": "Grab a quick breakfast before heading to the theme parks.",
        "Price": "Cost varies depending on choice."
      },
      "Activity1": {
        "Time": "10:00 AM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Disneyland Tokyo",
        "Name": "Fun-filled day at Disneyland Tokyo",
        "Type": "Theme Park",
        "Price": "Ticket prices vary"
      },
      "Lunch": {
        "Time": "12:30 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Disneyland Tokyo",
        "Menu": "Enjoy a meal at one of the park's restaurants.",
        "Price": "Cost varies depending on choice."
      },
      "Activity2": {
        "Time": "3:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Tokyo Tower",
        "Name": "Enjoing city view at Tokyo Tower",
        "Type": "Landmark",
        "Price": "Admissions fee vary"
      },
      "Dinner": {
        "Time": "7:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Local restaurant in Tokyo",
        "Menu": "Relax and enjoy dinner with friends.",
        "Price": "Cost varies depending on choice."
      },
      "Activity3": {
        "Time": "9:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Exploring Tokyo",
        "Name": "Evening stroll in Tokyo",
        "Type": "Exploration",
        "Price": "Free"
      }
    },
    "Day 2": {
      "Date": "2024.6.7",
      "Breakfast": {
        "Time": "8:00 AM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Hotel or local cafe in Tokyo",
        "Menu": "Start the day with a hearty breakfast.",
        "Price": "Cost varies depending on choice."
      },
      "Activity1": {
        "Time": "10:00 AM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Ghibli Museum",
        "Name": "Visit to Ghibli Museum",
        "Type": "Museum",
        "Price": "Ticket prices vary"
      },
      "Lunch": {
        "Time": "12:30 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Local restaurant near Ghibli Museum",
        "Menu": "Enjoy lunch in the vicinity of the museum.",
        "Price": "Cost varies depending on choice."
      },
      "Activity2": {
        "Time": "3:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Shinjuku",
        "Name": "Exploring Shinjuku district",
        "Type": "Exploration",
        "Price": "Free"
      },
      "Dinner": {
        "Time": "7:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Local restaurant in Shinjuku",
        "Menu": "Dine at a recommended restaurant in Shinjuku.",
        "Price": "Cost varies depending on choice."
      },
      "Activity3": {
        "Time": "9:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Shinjuku",
        "Name": "Nightlife in Shinjuku",
        "Type": "Nightlife",
        "Price": "Cost varies depending on choice."
      }
    },
    "Day 3": {
      "Date": "2024.06.08",
      "Breakfast": {
        "Time": "8:00 AM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Hotel or local cafe in Tokyo",
        "Menu": "Enjoy a leisurely breakfast before starting the day's activities.",
        "Price": "Cost varies depending on choice."
      },
      "Activity1": {
        "Time": "10:00 AM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Asakusa",
        "Name": "Visit to Senso-ji Temple",
        "Type": "Landmark",
        "Price": "Free"
      },
      "Lunch": {
        "Time": "12:30 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Local restaurant in Asakusa",
        "Menu": "Savor traditional Japanese cuisine for lunch.",
        "Price": "Cost varies depending on choice."
      },
      "Activity2": {
        "Time": "3:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Akihabara",
        "Name": "Exploring Akihabara district",
        "Type": "Exploration",
        "Price": "Free"
      },
      "Dinner": {
        "Time": "7:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Local restaurant in Akihabara",
        "Menu": "Enjoy dinner at a themed restaurant in Akihabara.",
        "Price": "Cost varies depending on choice."
      },
      "Activity3": {
        "Time": "9:00 PM",
        "Time Zone": "Asia/Tokyo",
        "Location": "Akihabara",
        "Name": "Shopping and arcade fun",
        "Type": "Entertainment",
        "Price": "Cost varies depending on choice."
      }
    }
  },
  "Estimated Budget": {
    "Range": "$4,000 - $5,000",
    "Food price": "Estimated $500 - $700",
    "Transportation": "Estimated $500 - $700 (including local travel within Tokyo)",
    "Accommodation": "Estimated $1,000 - $1,500 (depending on hotel choice and length of stay)",
    "Flight": "Estimated $1,500 - $2,000 (from South Korea to Tokyo)",
    "Activities": "Estimated $200 - $300",
    "Total": "Varies depending on specific choices and spending habits"
  }
}



'''{"Travel Summary": {"plan_title": "Tokyo Adventure with Friends (June 6-8, 2024)", "destination": "Tokyo, Japan", "departure_place": "South Korea", "travel_dates": {"date_from": "2024.6.6", "date_to": "2024.6.10"}, "travel_with": "friends, 23 years old", "theme_of_trip": "Visiting Disneyland and Tokyo Tower"}, "Recommand Clothes": {"Top": "Light and breathable fabrics suitable for Tokyo's summer weather, considering visits to Disneyland and Tokyo.", "Bottom": "Comfortable shorts or pants for walking around the theme parks, and a dressier outfit for any evening activities.", "Shoes": "Comfortable sneakers for walking in the theme parks and exploring Tokyo, and dress shoes for any evening outings."}, "Daily Planner": {"Day1": {"Date": "2024.06.06", "Breakfast": {"Time": "8:00 AM", "Time Zone": "Asia/Tokyo", "Location": "Hotel or local bakery in Tokyo", "Menu": "Grab a quick breakfast before heading to the theme parks.", "Price": "Cost varies depending on choice."}, "Activity1": {"Time": "10:00 AM", "Time Zone": "Asia/Tokyo", "Location": "Disneyland Tokyo", "Name": "Fun-filled day at Disneyland Tokyo", "Type": "Theme Park", "Price": "Ticket prices vary"}, "Lunch": {"Time": "12:30 PM", "Time Zone": "Asia/Tokyo", "Location": "Disneyland Tokyo", "Menu": "Enjoy a meal at one of the park's restaurants.", "Price": "Cost varies depending on choice."}, "Activity2": {"Time": "3:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Tokyo Tower", "Name": "Enjoing city view at Tokyo Tower", "Type": "Landmark", "Price": "Admissions fee vary"}, "Dinner": {"Time": "7:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Local restaurant in Tokyo", "Menu": "Relax and enjoy dinner with friends.", "Price": "Cost varies depending on choice."}, "Activity3": {"Time": "9:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Exploring Tokyo", "Name": "Evening stroll in Tokyo", "Type": "Exploration", "Price": "Free"}}, "Day2": {"Date": "2024.6.7", "Breakfast": {"Time": "8:00 AM", "Time Zone": "Asia/Tokyo", "Location": "Hotel or local cafe in Tokyo", "Menu": "Start the day with a hearty breakfast.", "Price": "Cost varies depending on choice."}, "Activity1": {"Time": "10:00 AM", "Time Zone": "Asia/Tokyo", "Location": "Ghibli Museum", "Name": "Visit to Ghibli Museum", "Type": "Museum", "Price": "Ticket prices vary"}, "Lunch": {"Time": "12:30 PM", "Time Zone": "Asia/Tokyo", "Location": "Local restaurant near Ghibli Museum", "Menu": "Enjoy lunch in the vicinity of the museum.", "Price": "Cost varies depending on choice."}, "Activity2": {"Time": "3:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Shinjuku", "Name": "Exploring Shinjuku district", "Type": "Exploration", "Price": "Free"}, "Dinner": {"Time": "7:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Local restaurant in Shinjuku", "Menu": "Dine at a recommended restaurant in Shinjuku.", "Price": "Cost varies depending on choice."}, "Activity3": {"Time": "9:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Shinjuku", "Name": "Nightlife in Shinjuku", "Type": "Nightlife", "Price": "Cost varies depending on choice."}}, "Day3": {"Date": "2024.06.08", "Breakfast": {"Time": "8:00 AM", "Time Zone": "Asia/Tokyo", "Location": "Hotel or local cafe in Tokyo", "Menu": "Enjoy a leisurely breakfast before starting the day's activities.", "Price": "Cost varies depending on choice."}, "Activity1": {"Time": "10:00 AM", "Time Zone": "Asia/Tokyo", "Location": "Asakusa", "Name": "Visit to Senso-ji Temple", "Type": "Landmark", "Price": "Free"}, "Lunch": {"Time": "12:30 PM", "Time Zone": "Asia/Tokyo", "Location": "Local restaurant in Asakusa", "Menu": "Savor traditional Japanese cuisine for lunch.", "Price": "Cost varies depending on choice."}, "Activity2": {"Time": "3:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Akihabara", "Name": "Exploring Akihabara district", "Type": "Exploration", "Price": "Free"}, "Dinner": {"Time": "7:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Local restaurant in Akihabara", "Menu": "Enjoy dinner at a themed restaurant in Akihabara.", "Price": "Cost varies depending on choice."}, "Activity3": {"Time": "9:00 PM", "Time Zone": "Asia/Tokyo", "Location": "Akihabara", "Name": "Shopping and arcade fun", "Type": "Entertainment", "Price": "Cost varies depending on choice."}}}, "Estimated Budget": {"Range": "$4,000 - $5,000", "Food price": "Estimated $500 - $700", "Transportation": "Estimated $500 - $700 (including local travel within Tokyo)", "Accommodation": "Estimated $1,000 - $1,500 (depending on hotel choice and length of stay)", "Flight": "Estimated $1,500 - $2,000 (from South Korea to Tokyo)", "Activities": "Estimated $200 - $300", "Total": "Varies depending on specific choices and spending habits"}}'''


'''
example_prompt = {
    "travel_summary": {
        "plan_title": "Tokyo Adventure with Friends (June 6-10, 2024)",
        "destination": "Tokyo, Japan",
        "departure_place": "South Korea",
        "travel_dates": {"date_from": "202466", "date_to": "2024610",
        "travel_with": "friends, 23 years old",
        "theme_of_trip": "Visiting Disneyland and Tokyo Tower"
    },
    "Recommand Clothes": {
        "Top": "Light and breathable fabrics suitable for Tokyo's summer weather, considering visits to Disneyland and Tokyo.",
        "Bottom": "Comfortable shorts or pants for walking around the theme parks, and a dressier outfit for any evening activities.",
        "Shoes": "Comfortable sneakers for walking in the theme parks and exploring Tokyo, and dress shoes for any evening outings."
    },
    "Daily Planner": {
        "Day1": {
            "Date": "202466",
            "Breakfast": {
                "Time": "8:00 AM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Hotel or local bakery in Tokyo",
                "Menu": "Grab a quick breakfast before heading to the theme parks.",
                "Price": "Cost varies depending on choice."
            },
            "Activity1": {
                "Time": "10:00 AM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Disneyland Tokyo",
                "Name": "Fun-filled day at Disneyland Tokyo",
                "Type": "Theme Park",
                "Price": "Ticket prices vary"
            },
            "Lunch": {
                "Time": "12:30 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Disneyland Tokyo",
                "Menu": "Enjoy a meal at one of the park's restaurants.",
                "Price": "Cost varies depending on choice."
            },
            "Activity2": {
                "Time": "3:00 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Tokyo Tower",
                "Name": "Enjoing city view at Tokyo Tower",
                "Type": "Landmark",
                "Price": "Admissions fee vary"
            },
            "Dinner": {
                "Time": "7:00 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Local restaurant in Tokyo",
                "Menu": "Relax and enjoy dinner with friends.",
                "Price": "Cost varies depending on choice."
            },
            "Activity3": {
                "Time": "9:00 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Exploring Tokyo",
                "Name": "Evening stroll in Tokyo",
                "Type": "Exploration",
                "Price": "Free"
            }
        },
        "Day2": {
            "Date": "202467",
            "Breakfast": {
                "Time": "8:00 AM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Hotel or local cafe in Tokyo",
                "Menu": "Start the day with a hearty breakfast.",
                "Price": "Cost varies depending on choice."
            },
            "Activity1": {
                "Time": "10:00 AM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Ghibli Museum",
                "Name": "Visit to Ghibli Museum",
                "Type": "Museum",
                "Price": "Ticket prices vary"
            },
            "Lunch": {
                "Time": "12:30 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Local restaurant near Ghibli Museum",
                "Menu": "Enjoy lunch in the vicinity of the museum.",
                "Price": "Cost varies depending on choice."
            },
            "Activity2": {
                "Time": "3:00 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Shinjuku",
                "Name": "Exploring Shinjuku district",
                "Type": "Exploration",
                "Price": "Free"
            },
            "Dinner": {
                "Time": "7:00 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Local restaurant in Shinjuku",
                "Menu": "Dine at a recommended restaurant in Shinjuku.",
                "Price": "Cost varies depending on choice."
            },
            "Activity3": {
                "Time": "9:00 PM",
                "Time Zone": "Asia/Tokyo",
                "Location": "Shinjuku",
                "Name": "Nightlife in Shinjuku",
                "Type": "Nightlife",
                "Price": "Cost varies depending on choice."
            }
        }
    },
    "Total Budget": {
        "Range": "$4,000 - $5,000",
        "Food price": "Estimated $500 - $700",
        "Transportation": "Estimated $500 - $700 (including local travel within Tokyo)",
        "Accommodation": "Estimated $1,000 - $1,500 (depending on hotel choice and length of stay)",
        "Flight": "Estimated $1,500 - $2,000 (from South Korea to Tokyo)",
        "Activities": "Estimated $200 - $300",
        "Total": "Varies depending on specific choices and spending habits"
    }
}
}
'''
'''
example_prompt = {"travel_summary": {"plan_title": "Osaka Adventure with Friends (June 6-8)","destination": "Osaka, Japan","departure_place": "South Korea","travel_dates": "June 6 to June 8","travel_with": "1 Friends, 23 years old","theme_of_trip": "Visiting Universal Studios and experiencing Osaka's vibrant atmosphere"},"Recommand Clothes": {"Top": "Casual and comfortable t-shirts, tank tops, or blouses.","Bottom": "Shorts, jeans, or skirts for breathability and ease of movement.","Shoes": "Comfortable sneakers for walking and exploring Osaka, and a pair of sandals or dress shoes for evening outings."},"Daily Planner": {"Day1": {"Breakfast": {"Time": "8:00 AM","Time Zone": "JST (UTC+9)","Location": "Hotel or local bakery in Osaka","Menu": "Grab a quick breakfast before heading to Universal Studios.","Price": "Cost varies depending on choice."},"Activity1": {"Time": "10:00 AM","Time Zone": "JST (UTC+9)","Location": "Universal Studios Japan","Name": "Fun-filled day at Universal Studios Japan","Type": "Theme Park","Price": "Ticket prices vary"},"Lunch": {"Time": "12:30 PM","Time Zone": "JST (UTC+9)","Location": "Universal Studios Japan","Menu": "Enjoy a meal inside the park.","Price": "Cost varies depending on choice."},"Activity2": {"Time": "3:00 PM","Time Zone": "JST (UTC+9)","Location": "Osaka","Name": "Explore Osaka's Dotonbori area","Type": "Exploration","Price": "Free"},"Dinner": {"Time": "7:00 PM","Time Zone": "JST (UTC+9)","Location": "Local restaurant in Osaka","Menu": "Try Osaka's renowned street food and local dishes.","Price": "Cost varies depending on choice."},"Activity3": {"Time": "9:00 PM","Time Zone": "JST (UTC+9)","Location": "Osaka","Name": "Stroll along Osaka's Namba district","Type": "Exploration","Price": "Free"}},"Day2": {"Breakfast": {"Time": "8:00 AM","Time Zone": "JST (UTC+9)","Location": "Hotel or local cafe in Osaka","Menu": "Start the day with a hearty breakfast.","Price": "Cost varies depending on choice."},"Activity1": {"Time": "10:00 AM","Time Zone": "JST (UTC+9)","Location": "Osaka Castle","Name": "Visit Osaka Castle and its historical grounds","Type": "Historical Site","Price": "Ticket prices vary"},"Lunch": {"Time": "12:30 PM","Time Zone": "JST (UTC+9)","Location": "Osaka Castle Park","Menu": "Enjoy a picnic lunch surrounded by nature.","Price": "Cost varies depending on choice."},"Activity2": {"Time": "3:00 PM","Time Zone": "JST (UTC+9)","Location": "Osaka Aquarium Kaiyukan","Name": "Explore the marine life at Osaka Aquarium Kaiyukan","Type": "Aquarium","Price": "Ticket prices vary"},"Dinner": {"Time": "7:00 PM","Time Zone": "JST (UTC+9)","Location": "Local restaurant in Osaka","Menu": "Indulge in a traditional Japanese dinner experience.","Price": "Cost varies depending on choice."},"Activity3": {"Time": "9:00 PM","Time Zone": "JST (UTC+9)","Location": "Osaka","Name": "Experience the lively nightlife in Osaka","Type": "Nightlife","Price": "Cost varies depending on choice."}}},"Total Budget": {"Range": "$1,500 - $2,500","Food price": "Estimated $200 - $300","Transportation": "Estimated $200 - $300 (including local travel within Osaka)","Accommodation": "Estimated $500 - $800 (depending on hotel choice and length of stay)","Flight": "Estimated $400 - $600 (from South Korea to Osaka)","Activities": "Estimated $200 - $300","Total": "Varies depending on specific choices and spending habits"}}

example_prompt = "{'travel_summary': {'plan_title': 'Hawaii Getaway with My Wife', 'destination': 'Hawaii', 'departure_place': 'Provo, Utah', 'travel_dates': 'June 11 to June 13', 'travel_with': 'wife, 30 years old', 'theme_of_trip': \"Swimming with turtles and surfing adventure\"}, 'Recommand Clothes': {'Top': 'Light and breathable t-shirts, tank tops, and swimsuits for beach activities.', 'Bottom': 'Shorts, skirts, and beach cover-ups for comfort and sun protection.', 'Shoes': 'Comfortable sandals, sneakers, and water shoes for various activities.', 'Accessories': 'Sunglasses, hat, and sunscreen for sun protection.'}, 'Daily Planner': {'Day1': {'Breakfast': {'Time': '8:00 AM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Hotel or local cafe', 'Menu': 'Start the day with a light breakfast.', 'Price': 'Cost varies depending on choice.'}, 'Activity1': {'Time': '10:00 AM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Turtle Bay', 'Name': 'Swim with turtles at Turtle Bay', 'Type': 'Wildlife', 'Price': 'Varies depending on tour operator'}, 'Lunch': {'Time': '12:30 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Beach park or local restaurant', 'Menu': 'Enjoy a casual lunch near the beach.', 'Price': 'Cost varies depending on choice.'}, 'Activity2': {'Time': '2:00 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Surfing Beach', 'Name': 'Surfing lessons for beginners', 'Type': 'Surfing', 'Price': 'Varies depending on surf school'}, 'Dinner': {'Time': '7:00 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Local seafood restaurant', 'Menu': 'Indulge in fresh Hawaiian seafood.', 'Price': 'Cost varies depending on choice.'}, 'Activity3': {'Time': '9:00 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Hotel or nearby area', 'Name': 'Relax and unwind', 'Type': 'Relaxation', 'Price': 'Free'}}, 'Day2': {'Breakfast': {'Time': '8:00 AM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Hotel or local cafe', 'Menu': 'Start the day with a filling breakfast.', 'Price': 'Cost varies depending on choice.'}, 'Activity1': {'Time': '10:00 AM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Surfing Beach', 'Name': 'Surfing practice', 'Type': 'Surfing', 'Price': 'Free (if equipment is rented on Day 1)'}, 'Lunch': {'Time': '12:30 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Beach park or local restaurant', 'Menu': 'Enjoy a picnic lunch at the beach.', 'Price': 'Cost varies depending on choice.'}, 'Activity2': {'Time': '2:00 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Snorkeling Spot', 'Name': 'Snorkeling to explore marine life', 'Type': 'Snorkeling', 'Price': 'Varies depending on tour operator'}, 'Dinner': {'Time': '7:00 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Local Hawaiian restaurant', 'Menu': 'Experience traditional Hawaiian cuisine.', 'Price': 'Cost varies depending on choice.'}, 'Activity3': {'Time': '9:00 PM', 'Time Zone': 'HST (UTC-10)', 'Location': 'Hotel or nearby area', 'Name': 'Reflect on the day's adventures', 'Type': 'Relaxation', 'Price': 'Free'}}}, 'Total Budget': {'Range': '$1,500 - $2,500', 'Food price': 'Estimated $200 - $300', 'Transportation': 'Estimated $100 - $200 (including airport transfers and local transportation)', 'Accommodation': 'Estimated $500 - $800 (depending on hotel choice and length of stay)', 'Flight': 'Estimated $400 - $600', 'Activities': 'Estimated $200 - $400', 'Total': 'Varies depending on specific choices and spending habits'}}"

example_prompt = '{"travel_summary": {"plan_title": "Hawaii Getaway with My Wife", "destination": "Hawaii", "departure_place": "Provo, Utah", "travel_dates": "June 11 to June 13", "travel_with": "wife, 30 years old", "theme_of_trip": "Swimming with turtles and surfing adventure"}, "Recommand Clothes": {"Top": "Light and breathable t-shirts, tank tops, and swimsuits for beach activities.", "Bottom": "Shorts, skirts, and beach cover-ups for comfort and sun protection.", "Shoes": "Comfortable sandals, sneakers, and water shoes for various activities.", "Accessories": "Sunglasses, hat, and sunscreen for sun protection."}, "Daily Planner": {"Day1": {"Breakfast": {"Time": "8:00 AM", "Time Zone": "HST (UTC-10)", "Location": "Hotel or local cafe", "Menu": "Start the day with a light breakfast.", "Price": "Cost varies depending on choice."}, "Activity1": {"Time": "10:00 AM", "Time Zone": "HST (UTC-10)", "Location": "Turtle Bay", "Name": "Swim with turtles at Turtle Bay", "Type": "Wildlife", "Price": "Varies depending on tour operator"}, "Lunch": {"Time": "12:30 PM", "Time Zone": "HST (UTC-10)", "Location": "Beach park or local restaurant", "Menu": "Enjoy a casual lunch near the beach.", "Price": "Cost varies depending on choice."}, "Activity2": {"Time": "2:00 PM", "Time Zone": "HST (UTC-10)", "Location": "Surfing Beach", "Name": "Surfing lessons for beginners", "Type": "Surfing", "Price": "Varies depending on surf school"}, "Dinner": {"Time": "7:00 PM", "Time Zone": "HST (UTC-10)", "Location": "Local seafood restaurant", "Menu": "Indulge in fresh Hawaiian seafood.", "Price": "Cost varies depending on choice."}, "Activity3": {"Time": "9:00 PM", "Time Zone": "HST (UTC-10)", "Location": "Hotel or nearby area", "Name": "Relax and unwind", "Type": "Relaxation", "Price": "Free"}}, "Day2": {"Breakfast": {"Time": "8:00 AM", "Time Zone": "HST (UTC-10)", "Location": "Hotel or local cafe", "Menu": "Start the day with a filling breakfast.", "Price": "Cost varies depending on choice."}, "Activity1": {"Time": "10:00 AM", "Time Zone": "HST (UTC-10)", "Location": "Surfing Beach", "Name": "Surfing practice", "Type": "Surfing", "Price": "Free (if equipment is rented on Day 1)"}, "Lunch": {"Time": "12:30 PM", "Time Zone": "HST (UTC-10)", "Location": "Beach park or local restaurant", "Menu": "Enjoy a picnic lunch at the beach.", "Price": "Cost varies depending on choice."}, "Activity2": {"Time": "2:00 PM", "Time Zone": "HST (UTC-10)", "Location": "Snorkeling Spot", "Name": "Snorkeling to explore marine life", "Type": "Snorkeling", "Price": "Varies depending on tour operator"}, "Dinner": {"Time": "7:00 PM", "Time Zone": "HST (UTC-10)", "Location": "Local Hawaiian restaurant", "Menu": "Experience traditional Hawaiian cuisine.", "Price": "Cost varies depending on choice."}, "Activity3": {"Time": "9:00 PM", "Time Zone": "HST (UTC-10)", "Location": "Hotel or nearby area", "Name": "Reflect on the day\'s adventures", "Type": "Relaxation", "Price": "Free"}}}, "Total Budget": {"Range": "$1,500 - $2,500", "Food price": "Estimated $200 - $300", "Transportation": "Estimated $100 - $200 (including airport transfers and local transportation)", "Accommodation": "Estimated $500 - $800 (depending on hotel choice and length of stay)", "Flight": "Estimated $400 - $600", "Activities": "Estimated $200 - $400", "Total": "Varies depending on specific choices and spending habits"}}'
'''

userPreference1 = ["Jeju-do", "Seoul", "my wife, 30 years old", "June 11, 2024", "June 12, 2024", "swimming, surfing"]

userPreference2 = ["Hochimin, Vietnam", "Tokyo, Japan", "2 friends, 20 years old", "Aug 2, 2024", "Aug 5, 2024", "Massage, famous market"]

userPreference3 = ["Los Angeles", "Salt Lake, Utah", "3 friends, 22 years old", "Dec 1, 2024", "Dec 4, 2024", "Disneyland, Hollywood"]

travelTo, travelFrom, travelWith, fromDate, toDate, specificActivity = userPreference2

travelTo = sys.argv[1] if len(sys.argv) > 1 else travelTo
travelFrom = sys.argv[2] if len(sys.argv) > 2 else travelFrom
travelWith = sys.argv[3] if len(sys.argv) > 3 else travelWith
fromDate = sys.argv[4] if len(sys.argv) > 4 else fromDate
toDate = sys.argv[5] if len(sys.argv) > 5 else toDate
specificActivity = sys.argv[6] if len(sys.argv) > 6 else specificActivity

prompt = f"User wants to build a travel plan. You are helping the user with provided information. Follow the example prompt for your response. Example prompt: {example_prompt} Important: if the travel plan is more than 3 days, you have to add additional days according to the travel dates. Use the following information - Destination: {travelTo}, Departure place: {travelFrom}, User traveling with: {travelWith}, From {fromDate} to {toDate}, User wants to do: {specificActivity}. Important: Only return a single piece of valid JSON text. Use the same structure of day 1, day 2, and day 3 for additional days. You must include all of the days planned. Your response is going to be used in json.loads(), so check if your response has a proper format to be used in json.loads(). Check if the comma is used in the right place. Always use double quotes in your response. Time Zone should be in the IANA format, and Date should be in YYYY.M.D. For example, it should be 2024.8.24 for August 24, 2024. There are Three big sections: (1) Travel Summary, (2) Daily Planner, and (3) Estimated Budget. Your response should include all of the days planned. For example, if the user is going to travel from July 6 to July 9, you have to provide plans for all of Day 1, Day 2, Day 3, and Day 4. Your response causes an error like \"Expecting ',' delimiter: line 35 column 46 (char 1042)\". Do your best to avoid this error"

counter = 0
while True:
    try:
        response = model.generate_content(prompt)

        """print(response.text)"""

        '''print(type(json.loads(response.text.replace("'", "\""))))
        print(type(json.loads(example_prompt.replace("'", "\'"))))
        '''

        cleaned = response.text.lstrip("```json").rstrip("```").replace("'", '"')

        json_version = json.loads(cleaned)
        url = 'http://localhost:3000/save-data-supabase'
        
        response = requests.post(url, json={'prompt': json_version})
        
        file_path = 'gemini_response.json'

        with open(file_path, 'w') as file:
            json.dump(json_version, file)

        print("File has been saved.")
        break  # 프로그램이 성공적으로 실행되었으면 루프를 종료합니다.
    except Exception as e:
        print("An error occurred:", e)
        if counter != 5:
            print("Restarting the program…")
            counter += 1
        elif counter == 5:
            print("exceeded 5 times")
            break

   
  