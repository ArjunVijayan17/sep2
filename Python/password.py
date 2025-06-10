cpass="123456"
for i in range(3):
    passwd=input("enter the password")
    if passwd==cpass:
        print("Access Granted")
        break
    else:
        print("Access Denied")
else:
    print("No more attempts")