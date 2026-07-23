from urllib.parse import quote_plus
from yoyo import read_migrations, get_backend
import mysql.connector
import os

def _build_dsn(app):
    host=app.config['MYSQL_HOST']
    user=app.config['MYSQL_USER']
    password=quote_plus(app.config['MYSQL_PASSWORD'])
    database=app.config['MYSQL_DB']
    
    return f"mysql://{user}:{password}@{host}/{database}"

def _db_exists(app):
    
    connection=mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD']
    )
    cursor = connection.cursor()
    cursor.execute(F"CREATE DATABASE IF NOT EXISTS `{(app.config['MYSQL_DB'])}`")
    cursor.close()
    connection.close()

def run_migrations(app):
    migrations_file_location = os.path.abspath(os.path.join(os.path.dirname(__file__), 'migrations'))
    os.makedirs(migrations_file_location, exist_ok=True)
    
    _db_exists(app)
    
    backend=get_backend(_build_dsn(app))
    migrations=read_migrations(migrations_file_location)
    
    with backend.lock():
        pending = backend.to_apply(migrations)
        if pending:
            print(f"Applying {len(pending)} migration(s)...")
            backend.apply_migrations(pending)
        else:
            print("No pending migrations.")        
    