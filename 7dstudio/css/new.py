import numpy as np
with open ('new1.csv') as f:
    price=[]
    for line in f:
        line_array=line.split(';')
        line_array=line_array[1].split(',')
        price.append(line_array[0]);
    price=price[1:]
    price=[float(i) for i in price]
    
    print(price)
    
    returns = []
    for i in range(1,len(price)):
        difference = price[i]-price[i-1]
        answer = (difference/price[i-1])
        returns.append(answer)
#         print(difference/price[i-1])
    # print(returns)
