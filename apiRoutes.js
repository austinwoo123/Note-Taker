const fs = require("fs");
const path = require('path');
const notes = require('./db/db.json');

// console.log("notes: ", notes);

// fs.writeFile

module.exports = function (app) {

    //readfile to setup notes variable

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
        notesId = notes.length + 1;
        // fs.readFile("/db/db.json", JSON.parse (res), function (err,data){
        //     if (err) throw err;
        //     var dbNotes= JSON.parse(data);
        //     var noteArray = [];

        // })
        let createNote = req.body;
        if (notes.length === 0) {
            createNote.id = 1;
        } else {
            createNote.id = (notes[notes.length - 1].id + 1);
        }

        // let noteId =
        // notes.push(createNote);
        // for (let i = 0; i < db.length; i++) {
        //     const newNote = {
        //         title: db[i].title,
        //         text: db[i].text,
        //         id: i
        //     };
        // }

        newNoteList.push(newNote);
        // writeDb();
        fs.writeFile("./db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
        }),
            addnote(req.body);
        res.json(createNote);
    }),

        app.delete("/api/notes/:id", function (req, res) {
            notes.splice(req.params.id, 1);
            writeDb();
            console.log("You deleted the note with id " + req.params.id);
        })
},

    function getNotes() {
        fs.readFile("./db/db.json", 'utf8', (err, data) => {
            if (err) throw err;
            return JSON.parse(data);
        });
    }










// function addNote(note) {
        //     const newNote = { title, text, id: uuidv1() };
        // }

        //     function addNote{

        //         var note = {
        //             title: 
        //             text: 
        //             id:
        //         }

        //     }
        // })

        // return console.log("New note added: " + createNote.title);

        //function that updates the db.json file when there is a new note. 
        // function writeDb() {
        //     // getNotes();
        //     fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
        //         if (err) throw err;

        //         res.json(req.body)
        //     })
        // }


 // addNote(note) {
        //     const { title, text } = note;
        //     if (!title || !text) {
        //       throw new _Error_(“Note ‘title’ and ‘text’ cannot be blank”);
        //     }
        //     // Add a unique id to the note using uuid package
        //     const newNote = { title, text, id: uuidv1() };
        //     // Get all notes, add the new note, write all the updated notes, return the newNote
        //     return this.getNotes()
        //       .then((notes) => [...notes, newNote])
        //       .then((updatedNotes) => this.write(updatedNotes))
        //       .then(() => newNote);
        //   }



//  11:32
    //  that is the complete function.  You will have to figure out where to put it.