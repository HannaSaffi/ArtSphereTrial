import pandas as pd
import os

# Use the absolute path for your CSV file
data_file = "Backend/app/Met_Museum_Collection.csv"

def load_data():
    """Load data from the CSV file."""
    if os.path.exists(data_file):
        return pd.read_csv(data_file)
    else:
        print(f"Warning: {data_file} not found. Initializing empty DataFrame.")
        return pd.DataFrame(columns=["Education_URL", "Title", "Time Period", "Image", "Author", "Location"])

def save_data(df):
    """Save the DataFrame back to the CSV file."""
    os.makedirs(os.path.dirname(data_file), exist_ok=True)
    df.to_csv(data_file, index=False)

def import_csv_to_db(csv_path):
    """Import a CSV file to replace the existing data."""
    if os.path.exists(csv_path):
        # Load the provided CSV file
        df = pd.read_csv(csv_path)

        # Ensure the required columns are present
        required_columns = ["Education_URL", "Title", "Time Period", "Image", "Author", "Location"]
        for col in required_columns:
            if col not in df.columns:
                raise ValueError(f"Missing required column: {col}")

        save_data(df)
        print(f"Data imported successfully from {csv_path}")
    else:
        raise FileNotFoundError(f"The file {csv_path} does not exist.")
