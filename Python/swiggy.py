loc=input("Is your location serviceable?(True or Flase)") =="True"
amt=float(input("Enter the order amount "))
min=200
if loc or amt>=min:
    print("Eligible for Delivery")
else:
    print("Not Eligible for Delivery")