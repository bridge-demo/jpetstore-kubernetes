import mysql.connector
from mysql.connector import errorcode
from mysql.connector import MySQLConnection
import os
#url = os.environ.get('mysql.url')
#user = os.environ.get('mysql.username')
#pswd = os.environ.get('mysql.password')
url = "mysqldb-45573c988f669ce564cd638aec565c29.mysql.database.azure.com"
user = "db_admin"
pswd = "Passw0rd1!"

# Obtain connection string information from the portal
config = {
  'host': url,
  'user': user,
  'password': pswd,
  'database':'mysql'
}
print(config)
# Construct connection string
try:
   conn = MySQLConnection(**config)
   print("Connection established")
   exit()
except Exception as err:
  print(err)
  exit()
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with the user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
else:
    cursor = conn.cursor()
import codecs
#fd = codecs.open('/src/jpetstore-mysql-1-schema.sql', mode='r', encoding='utf-8-sig', errors='ignore')
operation = fd.read()
fd.close()
try:
  for result in cursor.execute(operation, multi=True):
    if result.with_rows:
      print("Rows produced by statement '{}':".format(
        result.statement))
      print(result.fetchall())
    else:
      print("Number of rows affected by statement '{}': {}".format(
        result.statement, result.rowcount))
except:
  print("###")

#fd = codecs.open('/src/jpetstore-mysql-2-dataload.sql', mode='r', encoding='utf-8-sig', errors='ignore')
operation = fd.read()
fd.close()
try:
  for result in cursor.execute(operation, multi=True):
    if result.with_rows:
      print("Rows produced by statement '{}':".format(
        result.statement))
      print(result.fetchall())
    else:
      print("Number of rows affected by statement '{}': {}".format(
        result.statement, result.rowcount))
except:
  print("---")
conn.commit()
conn.close()
