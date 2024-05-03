import json

import json

def find_locations(json_data):
    
    # Open gemini_response.json and read location data
    with open('./backend/api/gemini_response.json', 'r') as file:
        gemini_location = json.load(file)

    # Initialize an empty list to store locations
    all_locations = []

    # Extract locations from all activities across days
    for day_data in json_data.get('Daily Planner', {}).values():
        for activity_data in day_data.values():
            # Check if the 'Location' key exists in the activity data
            if 'Location' in activity_data:
                location = activity_data['Location']
                # Replace spaces with %20
                location = location.replace(' ', '%20')
                all_locations.append(location)

    return all_locations

# Load JSON data from the file
with open('./backend/api/gemini_response.json', 'r') as file:
    gemini_data = json.load(file)

# Find and save all locations
all_locations = find_locations(gemini_data)

# Print all locations found
print("All Locations:")
for location in all_locations:
    print(location)


def generate_url():

    # Generate URLs for all locations
    generated_urls = []
    if all_locations:
        cx = 'b53745293651e4028'
        for location in all_locations:
            query = location
            url = f"https://cse.google.com/cse?cx={cx}#gsc.tab=1&gsc.q={query}&gsc.sort=&gsc.page=1"
            generated_urls.append(url)
            print(url)
        return generated_urls
    else:
        print("No location data found in the JSON file.")
        return None

# Call the function to generate the URL(s)
generated_urls = generate_url()

if generated_urls:
    print(generated_urls)
else:
    print("URL generation failed.")
