mark=int(input("Enter the Mark"))
exp=int(input("Enter The Experience"))
if mark>80:
    print("Eligible for Job")
else:
    if exp>=3:
        print("Eligible for Job")
    else:
        print("Not Eligible for Job")
