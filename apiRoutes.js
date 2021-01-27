const fs = require("fs");


// fs.writeFile


module.exports = function (app) {
    //readfile to setup notes variable

    fs.readFile("db/db.json", 'utf8', (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);

        // create get route for /api/notes
        app.get("/api/notes", function (req, res) {
            console.log("hello world!")
            res.json(notes);
        });
        // Create post route for /api/notes 
        app.post("/api/notes", function (req, res) {
            let createNote = req.body;
            notes.push(createNote);
            return console.log("New note added: " + createNote.title)
        });









    });



}













