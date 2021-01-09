import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pprint import pprint
import json, sys
import pyrebase

config = {
	"apiKey": "AIzaSyAgPnL3vpieutG9wpq0LqIPbMzKJWKQbxI",
    "authDomain": "test-f0eaf.firebaseapp.com",
    "databaseURL": "https://test-f0eaf-default-rtdb.firebaseio.com",
    "projectId": "test-f0eaf",
    "storageBucket": "test-f0eaf.appspot.com",
    "messagingSenderId": "313053486355"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()
# from psycopg2 import connect, Error
scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)
client = gspread.authorize(creds)
sheet = client.open("pythonass").sheet1  # Open the spreadhseet
data = sheet.get_all_records() # Get a list of all records
db.push(data)


# # pprint(data)
# db.child("names").update({"name":"nikhil"})

# row = sheet.row_values(1)  # Get a specific row
# col = sheet.col_values(1)  # Get a specific column
# cell = sheet.cell(1,1).value  # Get the value of a specific cell
# print(row, col, cell)


# insertRow = ["red"]
# sheet.add_rows(1)  # Insert the list as a row at index 3

# sheet.update_cell(1,1, "CHANGED")  # Update one cell

# numRows = sheet.row_count  # Get the number of rows in the sheet
# print(numRows)