//Dependencies go here
const express = require("express");
const app = express()

const PORT = prcoess.env.port || 8080;


require("./assets/js/apiRoutes")(app);
require(".assets/js/htmlRoutes")(app);





app.listen(PORT, function () {
    console.log("Application is listening on PORT " + PORT);
});