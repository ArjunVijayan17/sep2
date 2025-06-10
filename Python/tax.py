subtotal=float(input("Enter the Total Price"))
tax=subtotal*10/100
subtotal=subtotal+tax
if subtotal>100:
    dis=subtotal*5/100
    subtotal=subtotal-dis

print("final price=",subtotal)
