import numpy as np
import pandas as pd
import ast

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
    df = json_normalize(lines['days'])
    print(df.head())

#start process
if __name__ == '__main__':
    main()