const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// MongoClient.connect(db.url, (err, database) => {
//     if (err) return console.log(err)

//     const dbs = database.db("test")
//     require('./app/routes/note.routes.js')(app);
//     app.listen(port, () => {
//         console.log('We are live on ' + port);
//     });
// })

// Connecting to the database
Mongoose.connect(db.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
    require('./app/routes')(app);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});