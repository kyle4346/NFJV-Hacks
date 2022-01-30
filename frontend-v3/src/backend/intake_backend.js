const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
//let intakeModel = require('./models/intake');
const app = express();
const port = 3000;

app.use(cors());



// used for configuring middleware. It ensures that the text is always json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variable for connection string
let IntakeDb;

/*This connection string variable is for connecting to the database. We actually made it so that anyone from any IP address can connect
as long as they have this string. You can still use your own thing if you want but you can see what we have in our database
if you like*/
let connectionString = `mongodb+srv://kjcorte2:Frenchfries1@cluster0.aoqxz.mongodb.net/Justice`

//used for connecting and assigning IntakeDb to client.db()
MongoClient.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        IntakeDb = client.db();
        app.listen(port, () => console.log(`Hello world app is listening on port ${port}!`));
    }
);

app.get('http://localhost:3000/forms', (req, res) => {
    // Getting all the data from the collection in the DB
    IntakeDb.collection('form').find().toArray(function (err, items) {
        res.json(items);
    });
});