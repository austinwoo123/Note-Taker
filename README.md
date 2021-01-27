# Note-Taker

## Description
I had to create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note date from a JSON file. 
## Table of Contents
1. [Description](#description)
2. [Screenshot](#Screenshot)
3. [Installation](#Installation)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Questions](#Questions)
9. [Acknowledgements](#acknowledgements)

## Screenshot


## Installation
1. Clone from GitHub
2. Open project directory, then npm install to install all dependencies
## Code Snippet
```
function getNotes() {
        fs.readFile("./db/db.json", 'utf8', (err, data) => {
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
```
This code shows how I created my get routes in my apiRoutes.js


## Built with
- Node
- Gitbash
- Express



## Licenses
   MIT License

## Author
   Austin Woo

## Questions

- For any questions related to this application, please contact me at: austinwoo123@gmail.com or visit my Github Profile here: https://github.com/austinwoo123
  
## Acknowledgements
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp

