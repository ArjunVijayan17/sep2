speed_log=[40,55,60,75]
speed_limit=50
violation=[]
for i in speed_log:
    if i>speed_limit:
        violation.append(i)
print("Number of violation =",len(violation))
print("Vehicles exceeding spped limit",violation)