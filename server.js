//Dependencies go here
const express = require("express");
const path = require("path");

// Set up Express App
const app = express()

const PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing or the middleland
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



require("./apiRoutes")(app);
require("./htmlRoutes")(app);




//Starts the server to begin listening
app.listen(PORT, function () {
    console.log("Application is listening on PORT " + PORT);
});