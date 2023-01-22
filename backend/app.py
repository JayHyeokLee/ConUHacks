from flask import Flask, render_template
import requests
import json
import urllib.request
import urllib.error

app = Flask(__name__)

key = "AIzaSyBEm3RgD3xbGuet6yAvahd8dTcyNXCuv8c"

@app.route('/')
def index():
    return render_template('index.html')




#------------------------------------------------------------
def nearby_search():
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.4924931%2C-73.5795758&radius=5000&type=restaurant&keyword=chinese&&key=" + key
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    results = response.text
    a = json.loads(results)["results"]
    
    activity = []
    for i in range(len(a)):
        name = a[i]["name"]
        status = a[i]["business_status"]
        if status != 'OPERATIONAL' or "price_level" not in a[i] or "rating" not in a[i] or "user_ratings_total" not in a[i]:
            continue
        else:
            price = a[i]["price_level"]
            rating = a[i]["rating"]
            ratings_total = a[i]["user_ratings_total"]
            data = {
                "name" : name,
                "rating" : rating,
                "num_ratings": ratings_total,
                "price": price
            }
            activity.append(data)
    return activity

    
        
def origin():
    address= "1251+rue+Saint+Marc,+Montreal,+QC"
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=%s&key=%s" % (address, key)
    response = urllib.request.urlopen(url)

    jsongeocode = response.read()

    b = json.loads(jsongeocode)["results"]

    lat = b[0]["geometry"]["location"]["lat"]
    long = b[0]["geometry"]["location"]["lng"]

    loc = str(lat) + "%2C" + str(long)
    return loc

def locations():
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.4924931%2C-73.5795758&radius=5000&type=restaurant&keyword=chinese&&key=" + key
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    results = response.text
    a = json.loads(results)["results"]
    latitudes = []
    longitudes = []

    for i in range(len(a)):
        name = a[i]["name"]
        status = a[i]["business_status"]
        if status != 'OPERATIONAL' or "price_level" not in a[i] or "rating" not in a[i] or "user_ratings_total" not in a[i]:
            continue
        else:
            latitudes.append(a[i]["geometry"]["location"]["lat"])
            longitudes.append(a[i]["geometry"]["location"]["lng"])

    locations = ""
    for i in range(len(latitudes) - 1):
        dest = str(latitudes[i]) + "%2C" + str(longitudes[i]) + "%7C"
        locations = locations + dest
        
    dest = str(latitudes[i]) + "%2C" + str(longitudes[i])
    locations = locations + dest

    return locations

def distance_from_origin(start, destinations):
    url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + start + "&destinations=" + destinations + "&key=" + key
    payload ={}
    headers = {}
    response  = requests.request("GET", url, headers=headers, data=payload)
    distance_response = response.text

    c = json.loads(distance_response)["rows"]
    distances = []
    duration = []
    for i in range(len(c[0]["elements"])):
        distances.append(c[0]["elements"][i]["distance"]["text"])
        duration.append(c[0]["elements"][i]["duration"]["text"])
    
    return distances

def scoring(list_of_activities, distances):
    scores = []

    for i in range(len(list_of_activities)):
        distance = float(distances[i])
        price = int(list_of_activities[i]["price"])
        rating = int(list_of_activities[i]["rating"])
        noRev = int(list_of_activities[i]["num_ratings"])

        distScore = 0 
        priceScore = 0
        rateScore = 0
        revScore = 0

        if(distance <= 5):
            distScore = 30
        elif(distance > 5 and distance <= 10):
            distScore = 25
        elif(distance > 10 and distance <= 15):
            distScore = 20
        elif(distance > 15 and distance <= 20):
            distScore = 15
        elif(distance > 20 and distance <= 25):
            distScore = 10
        elif(distance > 25 and distance <= 30):
            distScore = 5
        else:
            distScore = 0

        if(price == 1):
            priceScore = 40
        elif(price == 2):
            priceScore = 25
        elif(price == 3):
            priceScore = 10
        elif(price == 4):
            priceScore = 0

        if(rating == 5):
            rateScore = 20
        elif(rating < 5 and rating >= 4.5):
            rateScore = 18
        elif(rating < 4.5 and rating >= 4):
            rateScore = 15
        elif(rating < 4 and rating >= 3.5):
            rateScore = 10
        elif(rating < 3.5 and rating >= 3):
            rateScore = 7
        elif(rating < 3 and rating > 0):
            rateScore = 5
        else:
            rateScore = 0

        if(noRev < 100):
            revScore = 3
        elif(noRev >= 100 and noRev < 250):
            revScore = 5
        elif(noRev >= 250 and noRev < 500):
            revScore = 8
        else:
            revScore = 10

        totalScore = distScore + priceScore + rateScore + revScore
        
        data = {
            "name" : list_of_activities[i]["name"],
            "price" : list_of_activities[i]["price"],
            "rating" : list_of_activities[i]["rating"],
            "distance_from_origin" : distances[i],
            "num_ratings" : list_of_activities[i]["num_ratings"],
            "total_score" : totalScore
        }

        scores.append(data)
    return scores

def removeChar(distances):
    new_distances = []
    for i in range(len(distances)):
        a = distances[i]
        b = a.replace('\'', '')
        c = b.replace('km', '')
        new_distances.append(float(c))
    return new_distances

def sort_scores(data):
    scores = []
    sorted_data = []
    for i in range(len(data)):
        scores.append(int(data[i]["total_score"]))

    scores = sorted(scores, reverse=True)
   

    for i in range(5):
        for j in range(len(data)):
            if data[j]["total_score"] == scores[i]:
                
                suggestions = {
                    "name" : data[j]["name"],
                    "price" : data[j]["price"],
                    "rating" : data[j]["rating"],
                    "distance_from_origin" : data[j]["distance_from_origin"],
                    "num_ratings" : data[j]["num_ratings"],
                    "total_score" : data[j]["total_score"]
                }
                sorted_data.append(suggestions)
                break
    return sorted_data

    
    
    


activity = nearby_search()
start = origin()
destinations = locations()
distances = distance_from_origin(start, destinations)
new_distances = removeChar(distances)
total_scores = scoring(activity, new_distances)
print(sort_scores(total_scores))


if __name__ == "__main__":
    app.run(debug=True)