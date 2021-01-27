const fs = require("fs");


// fs.writeFile


module.exports = function (app) {
    //readfile to setup notes variable

    fs.readFile("db/db.json", 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
    });
    // create get route for /api/notes
    app.get("/api/notes", function (req, res) {
        console.log("hello world!")
        res.json(notes);
    });
    // Create post route for /api/notes 
    app.post("/api/notes", function (req, res) {
        let createNote = req.body;
        notes.push(createNote);
        writeDb()
        return console.log("New note added: " + createNote.title)
    });
    //function that upddates the db.json file when there is a new note. 
    function writeDb() {
        fs.writeFile("db/db.json", JSON.stringify(notes, '\n'), err => {
            if (err) throw err;
            return true;
        })
    }

    app.get("/api/notes/:id", function (req, res) {
        res.json(notes[req.params.id]);
    });



















}













