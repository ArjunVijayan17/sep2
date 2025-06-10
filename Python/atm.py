amt=int(input("Enter the Withdrawal Amount"))
l=[2000,500,200,100]
for i in l:
    c=amt//i
    amt=amt%i
    if c>0:
        print("No of denotions of",i,"is",c)