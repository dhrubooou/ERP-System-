import mysql.connector
from mysql.connector import Error
from flask import current_app

def get_db_connection():
    try:
        connection=mysql.connector.connect(
            host=current_app.config['MYSQL_HOST'],
            user=current_app.config['MYSQL_USER'],
            password=current_app.config['MYSQL_PASSWORD'],
            database=current_app.config['MYSQL_DB']
        )
        if connection.is_connected():
            print(True)
            return connection
    except Error as e:
        print(f"Error while connecting to MySQL: {e}")
        return None