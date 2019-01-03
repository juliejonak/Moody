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

df = pd.DataFrame(np.random.randint(low=2, high=5, size=(31, 5)),
             columns=['mood', 'coffee', 'drinks', 'sleep', 'exercise'])

dates = ['2017-03-1','2017-03-2','2017-03-3','2017-03-4','2017-03-5','2017-03-6','2017-03-7','2017-03-8','2017-03-9','2017-03-10','2017-03-11','2017-03-12','2017-03-13','2017-03-14','2017-03-15','2017-03-16','2017-03-17','2017-03-18','2017-03-19','2017-03-20','2017-03-21','2017-03-22','2017-03-23','2017-03-24','2017-03-25','2017-03-26','2017-03-27','2017-03-28','2017-03-29','2017-03-30','2017-03-31']

df['date'] = pd.to_datetime(dates)
df['mood_str'] = df['mood']

pd.options.mode.chained_assignment = None
for i in range(len(df)):
    df['mood_str'][i] = ('Mood: '+str(df['mood'][i]))

trace1 = go.Scatter(
    x = df['date'],
    y = df['mood'],
    mode = 'lines',
    name = 'Mood Score',
    marker = dict(color='blue'))

trace2 = go.Scatter(
    visible = False,
    x = df['date'],
    y = df['coffee'],
    mode = 'lines',
    name= 'Coffees',
    text= df['mood_str'],
    hoverinfo=('text'),
    marker = dict(color = 'green'))


trace3 = go.Scatter(
    visible = False,
    x = df['date'],
    y = df['drinks'],
    mode = 'lines',
    name= 'Drinks',
    text= df['mood_str'],
    marker = dict(color = 'green'))

trace4 = go.Scatter(
    visible = False,
    x = df['date'],
    y = df['sleep'],
    mode = 'lines',
    name= 'Sleep',
    text= df['mood_str'],
    marker = dict(color = 'green'))

trace5 = go.Scatter(
    visible = False,
    x = df['date'],
    y = df['exercise'],
    mode = 'lines',
    name= 'Exercise',
    text= df['mood_str'],
    marker = dict(color = 'green'))

data = [trace1, trace2, trace3, trace4, trace5]

updatemenus = list([
    dict(active=-1,
         buttons=list([   
            dict(label = 'U sucks',
                 method = 'update',
                 args = [{'visible': [True, False, False, False, False]},
                         {'title': 'Mood'}]),
             dict(label = 'Coffee',
                 method = 'update',
                 args = [{'visible': [False, True, False, False, False]},
                         {'title': 'Coffee'}]),
             dict(label = 'Drinks',
                 method = 'update',
                 args = [{'visible': [False, False, True, False, False]},
                         {'title': 'Drinks'}]),
             dict(label = 'Sleep',
                 method = 'update',
                 args = [{'visible': [False, False, False, True, False]},
                         {'title': 'Sleep'}]),
             dict(label = 'Exercise',
                 method = 'update',
                 args = [{'visible': [False, False, False, False, True]},
                         {'title': 'Exercise'}]),
           
         ])
    )
])

layout = dict(title = 'Its alive!!!',
              xaxis= dict(title='Date', ticklen = 5, 
                          zeroline=False),
              autosize=False,
              width=750,
              height=500,
             showlegend=False,
             updatemenus=updatemenus)

fig = dict(data = data, layout = layout)
plot_url = py.plot(fig, filename='plot from API (12)')