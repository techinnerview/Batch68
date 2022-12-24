const express = require('express');
const bodyParser = require('body-parser');

const resRoutes = require('./Routes/Restaurant');  // importing the routes 

const hostname = 'localhost';
const port = 6504;

const app = express();

app.use(bodyParser.json());  // Initializing the body-parser as middleware

// block of code to handle CORS Issue - Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', resRoutes);  // registering the routes

// starting the server using the listen function on specific port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});