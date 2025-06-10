def example(a,b=10,*args,**kwargs):
    print("a:",a)
    print("b:",b)
    print("args:",args)
    print("kwargs:",kwargs)

example(1,2,3,4,name="John",city="Kochi")
