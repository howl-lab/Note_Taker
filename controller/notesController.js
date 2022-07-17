const fs = require('fs');
const path = require('path');
const { v4: uuidV4 } = require('uuid');

const getNotes = (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, notes) => {
        if (err) {
            return res.status(400).json({ err });
        }
        res.json(JSON.parse(notes));
    });
};

const postNote = (req, res) => {

    const newNote = req.body;
    newNote.id = uuidV4();
    // console.log(newNote);
    // res.json(newNote);

    // get json parse array of objects from db.json
    // or async/await
    const noteArray = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8', (err, notes) => {
        if (err) {
            return res.status(400).json({ err });
        }

        return JSON.parse(notes);

    }));

    console.log(typeof noteArray);
    console.log(noteArray);
    console.log(newNote);


    // add new note object to that array from database
    noteArray.push(newNote);



    //update db.json with note array
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray), (err) => {
        if (err) {
            return res.status(400).json({ err });
        } else {
            res.json(newNote);
        }
    });

};

const deleteNote = (req, res) => {
    console.log('delete?');
    //reading db and getting array
    const noteArray = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {

        if (err) {
            return res.status(400).json({ err });
        };
        return data;

    }));

    const filterArray = noteArray.filter(note => note.id !== req.params.id);


    //update db.json with note array
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(filterArray), (err) => {
        if (err) {
            return res.status(400).json({ err });
        } else {
            // can return anything like deleted item, new array, etc.
            res.json(noteArray);
        }
    });

};




module.exports =
{
    getNotes,
    postNote,
    deleteNote
};