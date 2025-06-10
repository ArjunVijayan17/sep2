password = input("Enter the password")
upper=False
lower=False
digit=False
if len(password) >= 8:
    for i in password:
        if i.isupper():
            upper=True
        if i.islower():
            lower=True
        if i.isdigit():
            digit=True
    if upper and lower and digit:
        print("Password is Strong")
    else:
        print("Passwod is weak")
else:
    print("Should contain Atleast 8 Characters")