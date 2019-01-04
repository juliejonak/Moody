#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jan  2 19:15:38 2019
@author: peytonrunyan
"""
import plotly
plotly.tools.set_credentials_file(username='peytonrunyan', api_key='68GXBmyFht8zjMRPuFnC')
import plotly.plotly as py
import plotly.graph_objs as go

import numpy as np
import pandas as pd

from pandas.io.json import json_normalize
import sys, json

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()
    df = json_normalize(lines[0]['days'])
    print(df.head())
    #Set date to pandas datatime
    df['date'] = pd.to_datetime(df['date'])

    #Correlations between mood and correlation_list items
    correlation_list = ['caffeine','alcohol','food','sleep','water']

    correlation_dict = {}
    for i in correlation_list:
        correlation_dict[i] = df['mood'].corr(df[i])



    #Create chart captions
    caption_dict = {'coffee':'hold','drinks':'hold','sleep':'hold','exercise':'hold'}

    for i in range(len(correlation_list)):
        if correlation_dict[correlation_list[i]] >= .7:
            caption_dict[correlation_list[i]] = 'As your <b>' + str(correlation_list[i]) + '</b> goes up, your mood tends to <b> increase </b>'
        
        elif correlation_dict[correlation_list[i]] >= .5:
            caption_dict[correlation_list[i]] = 'As your <b>' + str(correlation_list[i]) + '</b> goes up, your mood tends to <b> increase moderately </b>'
        
        elif correlation_dict[correlation_list[i]] >= .3:
            caption_dict[correlation_list[i]] = 'As your <b>' + str(correlation_list[i]) + '</b> goes up, your mood tends to <b> increase a little </b>'
        
        elif correlation_dict[correlation_list[i]] < .3 and correlation_dict[correlation_list[i]] > -.3:
            caption_dict[correlation_list[i]] = 'There is no relationship between <b>' + str(correlation_list[i]) + '</b> and your mood'
        
        elif correlation_dict[correlation_list[i]] <= -.3 and correlation_dict[correlation_list[i]] > -.5:
            caption_dict[correlation_list[i]] = 'As your <b>' + str(correlation_list[i]) + '</b> goes up, your mood tends to <b> decrease a little </b>'
            
        elif correlation_dict[correlation_list[i]] <= -.5 and correlation_dict[correlation_list[i]] > -.7:
            caption_dict[correlation_list[i]] = 'As your <b>' + str(correlation_list[i]) + '</b> goes up, your mood tends to <b> decrease moderately </b>'
        
        elif correlation_dict[correlation_list[i]] < -.7:
            caption_dict[correlation_list[i]] = 'As your <b>' + str(correlation_list[i]) + '</b> goes up, your mood tends to <b> decrease </b>'

    #Create mood rolling average
    rolling_mood = df['mood'].rolling(3).mean()

    rolling_mood.fillna(0)




    #Let's graph some shizz

    trace1 = go.Scatter(
        x = df['date'],
        y = rolling_mood,
        mode = 'lines',
        name = 'Mood Score',
        hoverinfo = 'text',
        text= df['mood'].round(2),
        line=dict(
            shape='spline',
        width = 4),
        marker = dict(color='rgba(255,64,153,1)'))

    trace2 = go.Scatter(
        visible = False,
        x = df['date'],
        y = df['caffeine'],
        mode = 'lines',
        name= 'Caffeine',
        text= df['caffeine'],
        fill='tozeroy',
        fillcolor='rgba(0,191,255,.2)',
        hoverinfo='text',
        line=dict(
            shape='spline',
        width=0.5),
        opacity = .01,
        marker = dict(color = 'rgba(0,191,255,0.8)'))


    trace3 = go.Scatter(
        visible = False,
        x = df['date'],
        y = df['alcohol'],
        mode = 'lines',
        name= 'Alcohol',
        fillcolor='rgba(0,191,255,.2)',
        fill='tozeroy',
        hoverinfo = 'text',
        text= df['alcohol'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0,191,255,0.8)'))

    trace4 = go.Scatter(
        visible = False,
        x = df['date'],
        y = df['food'],
        mode = 'lines',
        name= 'Food',
        fill='tozeroy',
        fillcolor='rgba(0,191,255,.2)',
        text= df['food'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0,191,255,0.8)'))

    trace5 = go.Scatter(
        visible = False,
        x = df['date'],
        y = df['sleep'],
        mode = 'lines',
        name= 'Sleep',
        fill='tozeroy',
        fillcolor='rgba(0,191,255,.2)',
        text= df['sleep'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0,191,255,0.8)'))

    trace6 = go.Scatter(
        visible = False,
        x = df['date'],
        y = df['water'],
        mode = 'lines',
        name= 'Water',
        fill='tozeroy',
        fillcolor='rgba(0,191,255,.2)',
        text= df['water'],
        line=dict(
            shape='spline'),
        marker = dict(color = 'rgba(0,191,255,0.8)'))

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

    layout = dict(title = 'mood',
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