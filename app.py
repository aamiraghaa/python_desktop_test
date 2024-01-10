from flask import Flask, render_template, request, jsonify
import pyodbc

app = Flask(__name__)

# Replace these values with your Azure SQL Database credentials
server = 'your_server_name.database.windows.net'
database = 'your_database_name'
username = 'your_username'
password = 'your_password'
driver = '{ODBC Driver 17 for SQL Server}'

# Define the connection string
connection_string = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_data', methods=['POST'])
def submit_data():
    try:
        # Retrieve data from the form
        time = request.form['time']
        amount = request.form['amount']

        # Establish a connection to the database
        connection = pyodbc.connect(connection_string)
        cursor = connection.cursor()

        # Perform the SQL query (replace with your actual query)
        cursor.execute("INSERT INTO YourTableName (TimeColumn, AmountColumn) VALUES (?, ?)", time, amount)
        connection.commit()

        return jsonify({"message": "Data inserted successfully"})
    except Exception as e:
        return jsonify({"error": str(e)})
    finally:
        # Close the connection
        cursor.close()
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)
