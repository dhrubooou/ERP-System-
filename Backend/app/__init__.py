from flask import Flask
from app.config import Config
from app.extensions import get_db_connection as db
from app.migrations import run_migrations

def create_app():
    app=Flask(__name__)
    app.config.from_object(Config)
    run_migrations(app)

    
    @app.route("/")
    def home():
        db_connection = db()
        if db_connection:
            print("Database connection successful")
        return {
            "message": "ERP Backend Running"
        }

    return app