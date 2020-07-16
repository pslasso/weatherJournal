// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');


// Start up an instance of app

const app = express();

/* Middleware*/

const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log(`runing on localhost: ${port}`);
};
// TODO-ROUTES!
//GET
app.get('/', getData)

function getData(req, res) {
    res.send(projectData)
    console.log(projectData)
}

//POST
app.post('/', addTemp)

function addTemp(req, res) {
    newEntrie = {
        date: req.body.newDate,
        temp: req.body.temp,
        feelings: req.body.feelings
    }
    projectData.push(newEntrie)
    res.send(projectData)
    console.log(projectData)
}