# Star Wars Project
This project is a web application that displays information about Star Wars characters, planets, and films. It uses a React frontend and an Express server backend, with data stored in a MongoDB database.

**Prerequisites** :

Before you begin, ensure you have the following installed on your machine:

Node.js, npm, &
MongoDB

## Setup Instructions
1. ### Download JSON Data
Download the JSON data from the following GitHub repository:

[Star Wars JSON Data](https://github.com/olaekdahl/swapi/tree/master/json-data)

2. ### Import Data to MongoDB


Start your MongoDB server if it's not already running.


Use the mongoimport command to import the JSON data into your MongoDB database.


    mongoimport --uri mongodb://localhost:27017/swapi --collection films --drop --file c:/swapi-data/films.json --jsonArray

Replace c:/swapi-data/films.json with the path to your downloaded JSON files.

Repeat the above command for other collections like characters and planets by changing the collection name and file path accordingly.

3. ### Setting Up Environment Variables

Create one .env file directly inside the server directory. Add these variables to your file.

    MONGO_DB_URL = 'mongodb://localhost:27017'
    MONGO_DB = 'swapi'

If your MongoDB instance is running on a different host or port, update MONGO_DB_URL accordingly.
If you're using a different database name, replace 'swapi' in MONGO_DB with your desired name.

4. ### Install Dependencies
Navigate to both the React frontend and the Express server directories and install the necessary dependencies.
    
    cd react
    npm install
    cd ../server
    npm install


5. ### Run the Application
Inside the server directory start the Express server, then navigate back to the React directory and start the React application:


    npm start
    cd ../react
    npm run dev


6. ### Access the Application
Open your web browser and go to http://localhost:5173 to view the Star Wars application.
#### Features

1. Characters: View a list of Star Wars characters with detailed information.
2. Planets: Explore various planets from the Star Wars universe.
3. Films: Discover films with descriptions and other details.

Contributing
If you wish to contribute to this project, please fork the repository and submit a pull request.
License
This project is licensed under the MIT License.
