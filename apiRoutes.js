const fs = require("fs");
const path = require('path');
const notes = require('./db/db.json');
// console.log("notes: ", notes);

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

    app.get("/api/notes/:id", function (req, res) {
        // getNotes();
        res.json(notes[req.params.id]);
    });
    // Create post route for /api/notes 
    app.post("/api/notes", function (req, res) {

        // fs.readFile("/db/db.json", JSON.parse (res), function (err,data){
        //     if (err) throw err;
        //     var dbNotes= JSON.parse(data);
        //     var noteArray = [];

        // })
        let createNote = req.body;
        if (notes.length === 0) {
            createNote.id = 1
        } else {
            createNote.id = (notes[notes.length - 1].id + 1);
        }
        // let noteId =
        notes.push(createNote);
        // writeDb();
        fs.writeFile(path.join(__dirname, "../db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) throw err;

            res.json(createNote)
        }))

        return console.log("New note added: " + createNote.title);
    });
    //function that updates the db.json file when there is a new note. 
    function writeDb() {
        // getNotes();
        fs.writeFile("./db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) throw err;

            res.json(req.body)
        })
    }

    app.delete("/api/notes/:id", function (req, res) {
        notes.splice(req.params.id, 1);
        writeDb();
        console.log("You deleted the note with id " + req.params.id);
    });



















}













