const fs = require("fs");
const path = require('path');
const notes = require('./db/db.json');
console.log("notes: ", notes);

// fs.writeFile


module.exports = function (app) {
    //readfile to setup notes variable
    function getNotes() {
        fs.readFile("db/db.json", 'utf8', (err, data) => {
            if (err) throw err;
            return JSON.parse(data);
        });
    }
    // create get route for /api/notes
    app.get("/api/notes", function (req, res) {
        // console.log("hello world!")
        let notes = getNotes();
        res.json(notes);
    });
    // Create post route for /api/notes 
    app.post("/api/notes", function (req, res) {
        let createNote = req.body;
        notes.push(createNote);
        writeDb();
        return console.log("New note added: " + createNote.title);
    });
    //function that updates the db.json file when there is a new note. 
    function writeDb() {
        getNotes();
        fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        })
    }

    app.get("/api/notes/:id", function (req, res) {
        getNotes();
        res.json(notes[req.params.id]);
    });

    app.delete("/api/notes/:id", function (req, res) {
        notes.splice(req.params.id, 1);
        writeDb();
        console.log("You deleted the note with id " + req.params.id);
    });



















}













