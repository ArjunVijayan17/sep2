def avg(L):
    if len(L)==0:
        raise ValueError("Empty list")
    else:
        print("average=",sum(L)/len(L))
l=["a",1,2]
try:
    avg(l)
except ValueError:
    print("Empty List")
except TypeError:
    print("Non-numeric data")
finally:
    print("computation done")
    
