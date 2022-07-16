// making express available to use
const express = require('express');
const fs = require('fs');
const db = require('./db/db.json')

const path = require('path');

const app = express();


//creating a port for our app to live in
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// need api/notes routes
// GET all notes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// api/notes

// api/notes/:id
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join (__dirname, 'db/db.json'))
});

// POST single notes
app.post('/api/notes', (req, res) => {
    // 1. Where is the source of the data?
    //   a. db/db.json or that db.json file
    // 2. Where is the new data to update db coming from? Where does the data live?
    //   a. Having urlencoded gives posts routes the .body key, which allows us to get data from our front end.
    //   b. Keep in mind you need an id field that is not included in req.body
    //   c. shape of new data should look like { title: "", text: "", id: equal to arrays length }
    console.log('req body: ', req.body);
    const new_data = { title: req.body.title }
    // 3. append this new data to our data source, how do we achieve this?
    //   a. push method to add new data to the array
    console.log(db);
    // 4. We need to replace the old data with our updated data, so it is permanently stored.
      // a. We need to write our updated data to db.json using the writeFile method.
    // 5. Send the newly updated db to the frontend
      // a. Use res(ponse) send method to sendFile, check the get route for syntax  
});
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