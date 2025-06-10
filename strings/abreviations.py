company_name=input("Enter the company name")
abbreviation=""
for i in company_name.split():
    abbreviation=abbreviation+i[0].upper()
print(abbreviation)