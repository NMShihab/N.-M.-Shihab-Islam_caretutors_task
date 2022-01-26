import requests # Import requests package for api call 

""" Api call"""
response = requests.get("https://gorest.co.in/public/v1/users", headers={ 'Authorization':"token d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3"})

print("=========== Fetched data ===========")
print(response.json())