import pandas as pd
import pandas_datareader as pdr
import datetime as dt
import yfinance as yf
import time
yf.pdr_override()
sleepTime = 2
stock = "AAPL"


end = dt.datetime.now()
start = dt.datetime(end.year,end.month,end.day)



while 1:
    df = pdr.get_data_yahoo(stock,start=start,end=end)
    print(df.shape)
    currentClose=df["Adj Close"][-1]
    print(currentClose)
    time.sleep(sleepTime)

