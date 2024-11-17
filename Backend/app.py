from app import create_app
from app.services.data_handler import import_csv_to_db
import os

# Use the absolute path for your CSV file
csv_file = "app/Met_Museum_Collection.csv"

# Create the Flask app instance
app = create_app()

# Import data if the CSV file exists
with app.app_context():
    if os.path.exists(csv_file):
        print("Importing data from CSV...")
        import_csv_to_db(csv_file)
    else:
        print(f"CSV file not found at {csv_file}. Starting with empty data.")

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
