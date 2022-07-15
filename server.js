// making express available to use
const router = require('./apiRoutes');
const express = require('express');

const path = require('path');

const app = express();


//creating a port for our app to live in
const PORT = process.env.PORT || 3001;


app.use('/api', )

// need api/notes routes
// GET all notes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// api/notes
// POST single notes

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join (__dirname, 'db/db.json'))
});

// api/notes/:id
// DELETE single note


//app is listening for any request coming to this port
app.listen(PORT, () => console.log(`Server successfully listening for request on PORT ${PORT}`));



//creating array of data
// search and delete
//make helper function
// fs.writeToFile
// const notes = fs.readFile with path to the db [

// ]

// maybe need to add that line to make all public file have a route
//possibly rewrite

//when server get a get request, to this URL, function is how to respond
// app.get('/public/notes', (req, res) => {
//     console.log('im hit');
//     res.json(notes);
// })


// app.use('/api', ) // add express router from route directory


//maybe write a POST
//when user make a post/write something to the url... something happens
//maybe write a DELETE
//when user delete a task from the note on the url...