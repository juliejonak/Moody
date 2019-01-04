# coding: utf-8

# In[14]:
from pandas.io.json import json_normalize
import sys, json

import numpy as np
import pandas as pd
import tweepy

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()
    df = json_normalize(lines['days'])

    auth = tweepy.OAuthHandler('ToXDE3GjlUwLo3zvH3vgkpuU9', 'IQaWXTLQlhrTPkfoRXwigVXyRAJSgtb9013JqPIlZDbO4sZ0r1')
    auth.set_access_token('1026856868097007617-GHj1xYaHubzTtelOJnnkP2DaZw0YL8', 'tlYqJOjeMNAMPGGZYOISyqvE0euiqGxc4wxpMthHd94Nn')

    api = tweepy.API(auth)

    username_input = json_normalize(lines)
    username = username_input['twitter'][0]

    tweets = api.user_timeline(screen_name=username, count=1000)

    tweet_df = pd.DataFrame(data=[tweet.text for tweet in tweets], columns=['tweets'])



    creation_date = pd.to_datetime([tweet.created_at for tweet in tweets])


    tweet_df['date'] = creation_date.date

    today = df['date'][0]
    today_date = pd.to_datetime(today).date()

    today_tweets = tweet_df[tweet_df['date'] == today_date]


    import re

    def clean_tweet(tweet):
        '''
        Utility function to clean the text in a tweet by removing 
        links and special characters using regex.
        '''
        return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())



    clean_tweets = []
    for tweet in today_tweets['tweets']:
        clean_tweets.append(clean_tweet(tweet))



    pd.options.mode.chained_assignment = None  
    today_tweets['clean'] = clean_tweets

    #pip install textblob
    from textblob import TextBlob
    tweet_sentiment = []

    for tweet in today_tweets['clean']:
        analysis = TextBlob(clean_tweet(tweet))
        if analysis.sentiment.polarity > 0:
            tweet_sentiment.append(1)
        elif analysis.sentiment.polarity == 0:
            tweet_sentiment.append(0)
        else:
            tweet_sentiment.append(-1)


    today_tweets['sentiment'] = tweet_sentiment

    day_sentiment = today_tweets['sentiment'].mean()

    print(day_sentiment)
    print(today_tweets['sentiment'].head())

if __name__ == '__main__':
    main()