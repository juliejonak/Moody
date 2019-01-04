#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jan  2 19:15:38 2019
@author: peytonrunyan
"""
#######import everything################################
import plotly
plotly.tools.set_credentials_file(username='peytonrunyan', api_key='68GXBmyFht8zjMRPuFnC')
import plotly.plotly as py
import plotly.graph_objs as go

import numpy as np
import pandas as pd
import tweepy

from pandas.io.json import json_normalize
import sys, json

import re
from textblob import TextBlob
#######Read data from stdin###############################
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    ####set data for plots###
    df_plot= json_normalize(lines['days'])
    print(df_plot)

    #Set date to pandas datatime
    df_plot['date'] = pd.to_datetime(df_plot['date'])
    df_plot = df_plot.sort_values(by='date')
    ###Twitter Stuff##############################
    #twitter auth
    auth = tweepy.OAuthHandler('ToXDE3GjlUwLo3zvH3vgkpuU9', 'IQaWXTLQlhrTPkfoRXwigVXyRAJSgtb9013JqPIlZDbO4sZ0r1')
    auth.set_access_token('1026856868097007617-GHj1xYaHubzTtelOJnnkP2DaZw0YL8', 'tlYqJOjeMNAMPGGZYOISyqvE0euiqGxc4wxpMthHd94Nn')
    #twitter fxn
    api = tweepy.API(auth)

    #get twitter handle from JSON
    username_input = json_normalize(lines)
    username = username_input['twitter'][0]

    #get tweets and set to dataframe
    tweets = api.user_timeline(screen_name=username, count=200)
    tweet_df = pd.DataFrame(data=[tweet.text for tweet in tweets], columns=['tweets'])
    #add date column
    creation_date = pd.to_datetime([tweet.created_at for tweet in tweets])
    tweet_df['date'] = creation_date.date

    #set date for tweets to filter and then filter by date
    today = df_plot['date'][0]
    today_date = pd.to_datetime(today).date()

    today_tweets = tweet_df[tweet_df['date'] == today_date]

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
    print(today_tweets)
#########################################################
    #Correlations between mood and correlation_list items
    correlation_list = ['caffeine','alcohol','food','sleep','water']

    correlation_dict = {}
    for i in correlation_list:
        correlation_dict[i] = df_plot['mood'].corr(df_plot[i])

    #Create chart captions
    tweet_cap = 'broken'

    if day_sentiment == 0:
        tweet_cap = '<b><span style="color: #38A1F3">Your tweets are neutral today</span></b>'
    elif day_sentiment > 0:
        tweet_cap = '<b><span style="color: #38A1F3">Your tweets are postive today</span></b>'
    elif day_sentiment < 0:
        tweet_cap = '<b><span style="color: #38A1F3">Your tweets are negative today</span></b>'
    else:
        tweet_cap = '<b><span style="color: #38A1F3">You have no tweets to analyze today</span></b>'

    caption_dict = {'coffee':'hold','drinks':'hold','sleep':'hold','exercise':'hold'}

    for i in range(len(correlation_list)):
        if correlation_dict[correlation_list[i]] >= .7:
            caption_dict[correlation_list[i]] = tweet_cap + '<br>As your <b><span style="color: #009900">' + str(correlation_list[i]) + '</span></b> goes up, your <span style="color: #FF4099">mood</span> tends to <b> increase </b>'

        elif correlation_dict[correlation_list[i]] >= .5:
            caption_dict[correlation_list[i]] = tweet_cap + '<br>As your <b><span style="color: #009900">' + str(correlation_list[i]) + '</span></b> goes up, your <span style="color: #FF4099">mood</span> tends to <b> increase moderately </b>'

        elif correlation_dict[correlation_list[i]] >= .3:
            caption_dict[correlation_list[i]] = tweet_cap + '<br>As your <b><span style="color: #009900">' + str(correlation_list[i]) + '</span></b> goes up, your <span style="color: #FF4099">mood</span> tends to <b> increase a little </b>'

        elif correlation_dict[correlation_list[i]] < .3 and correlation_dict[correlation_list[i]] > -.3:
            caption_dict[correlation_list[i]] = tweet_cap + '<br>There is no relationship between <b><span style="color: #009900">' + str(correlation_list[i]) + '</span></b> and your <span style="color: #FF4099">mood</span>'

        elif correlation_dict[correlation_list[i]] <= -.3 and correlation_dict[correlation_list[i]] > -.5:
            caption_dict[correlation_list[i]] = tweet_cap + '<br>As your <b><span style="color: #009900">' + str(correlation_list[i]) + '</span></b> goes up, your <span style="color: #FF4099">mood</span> tends to <b> decrease a little </b>'

        elif correlation_dict[correlation_list[i]] <= -.5 and correlation_dict[correlation_list[i]] > -.7:
            caption_dict[correlation_list[i]] = tweet_cap + '<br>As your <b><span style="color: #009900">' + str(correlation_list[i]) + '</span></b> goes up, your <span style="color: #FF4099">mood</span> tends to <b> decrease moderately </b>'

        elif correlation_dict[correlation_list[i]] < -.7:
            caption_dict[correlation_list[i]] = tweet_cap + '<br>As your <b><span style="color: #009900">' + str(correlation_list[i]) + '</span></b> goes up, your <span style="color: #FF4099">mood</span> tends to <b> decrease </b>'

        #255, 208, 22


    #Create mood rolling average
    rolling_mood = df_plot['mood'].rolling(3).mean()

    rolling_mood.fillna(0)




    #Let's graph some shizz

    trace1 = go.Scatter(
        x = df_plot['date'],
        y = rolling_mood,
        mode = 'lines',
        name = 'Mood Score',
        hoverinfo = 'text',
        text= df_plot['mood'].round(2),
        line=dict(
            shape='spline',
        width = 4),
        marker = dict(color='rgba(255,64,153,1)'))

    trace2 = go.Scatter(
        visible = False,
        x = df_plot['date'],
        y = df_plot['caffeine'],
        mode = 'lines',
        name= 'Caffeine',
        text= df_plot['caffeine'],
        fill='tozeroy',
        fillcolor='rgba(0, 153, 0,.2)',
        hoverinfo='text',
        line=dict(
            shape='spline',
        width=0.5),
        opacity = .01,
        marker = dict(color = 'rgba(0, 153, 0,0.8)'))


    trace3 = go.Scatter(
        visible = False,
        x = df_plot['date'],
        y = df_plot['alcohol'],
        mode = 'lines',
        name= 'Alcohol',
        fillcolor='rgba(0, 153, 0,.2)',
        fill='tozeroy',
        hoverinfo = 'text',
        text= df_plot['alcohol'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0, 153, 0,0.8)'))

    trace4 = go.Scatter(
        visible = False,
        x = df_plot['date'],
        y = df_plot['food'],
        mode = 'lines',
        name= 'Food',
        fill='tozeroy',
        fillcolor='rgba(0, 153, 0,.2)',
        text= df_plot['food'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0, 153, 0,0.8)'))

    trace5 = go.Scatter(
        visible = False,
        x = df_plot['date'],
        y = df_plot['sleep'],
        mode = 'lines',
        name= 'Sleep',
        fill='tozeroy',
        fillcolor='rgba(0, 153, 0,.2)',
        text= df_plot['sleep'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0, 153, 0,0.8)'))

    trace6 = go.Scatter(
        visible = False,
        x = df_plot['date'],
        y = df_plot['water'],
        mode = 'lines',
        name= 'Water',
        fill='tozeroy',
        fillcolor='rgba(0, 153, 0,.2)',
        text= df_plot['water'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0, 153, 0,0.8)'))

    data = [trace1, trace2, trace3, trace4, trace5, trace6]

    updatemenus = list([
        dict(active=-1,
            buttons=list([
                dict(label = 'Mood',
                    method = 'update',
                    args = [{'visible': [True, False, False, False, False, False]},
                            {'title': 'Examine your mood over time'}]),
                dict(label = 'Caffeine',
                    method = 'update',
                    args = [{'visible': [True, True, False, False, False, False]},
                            {'title': caption_dict['caffeine']}]),
                dict(label = 'Alcohol',
                    method = 'update',
                    args = [{'visible': [True, False, True, False, False, False]},
                            {'title': caption_dict['alcohol']}]),
                dict(label = 'Food',
                    method = 'update',
                    args = [{'visible': [True, False, False, True, False, False]},
                            {'title': caption_dict['food']}]),
                dict(label = 'Sleep',
                    method = 'update',
                    args = [{'visible': [True, False, False, False, True, False]},
                            {'title': caption_dict['sleep']}]),
                dict(label = 'Water',
                    method = 'update',
                    args = [{'visible': [True, False, False, False, False, True]},
                            {'title': caption_dict['water']}]),
            ])
        )
    ])

    layout = dict(title = 'Results',
                xaxis= dict(title='Date', ticklen = 5,
                            zeroline=False),
                autosize=False,
                width=650,
                height=300,
                showlegend=False,
                updatemenus=updatemenus)

    fig = dict(data = data, layout = layout)
    plot_url = py.plot(fig, filename='plot from API (12)')

#start process
if __name__ == '__main__':
    main()