def scoring(distance, price, rating, noRev):

    distScore, priceScore, rateScore, revScore = 0

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

    return distScore + priceScore + rateScore + revScore