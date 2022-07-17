// making express available to use
const express = require('express');
const fs = require('fs');
const db = require('./db/db.json')
const routes = require('./routes');
const path = require('path');

const app = express();


//creating a port for our app to live in
const PORT = process.env.PORT || 3001;

//for front end data to be use for backend
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//making the public folder the new root for front end
//create a route for every single file in this folder
app.use(express.static('public'));

app.use(routes);

//when app get '/', will return a file with public/index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//when app get '/notes', will return a file with public/notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


// // POST single notes
// // app.post('/api/notes', (req, res) => {
// //     // 1. Where is the source of the data?
// //     //   a. db/db.json or that db.json file
// //     fetch('db/db.json')
// //         .then(res => res.json())
// //         .then(db => console.log(db));
// //     // res.sendFile(path.join (__dirname, 'db/db.json'))


// //     // 2. Where is the new data to update db coming from? Where does the data live?
// //     //   a. Having urlencoded gives posts routes the .body key, which allows us to get data from our front end.


// //     //   b. Keep in mind you need an id field that is not included in req.body
// //     //   c. shape of new data should look like { title: "", text: "", id: equal to arrays length }
// //     console.log('req body: ', req.body);
// //     const new_data = { title: req.body.title }
// //     // 3. append this new data to our data source, how do we achieve this?
// //     //   a. push method to add new data to the array
// //     console.log(db);
// //     // 4. We need to replace the old data with our updated data, so it is permanently stored.
// //     // a. We need to write our updated data to db.json using the writeFile method.
// //     // 5. Send the newly updated db to the frontend
// //     // a. Use res(ponse) send method to sendFile, check the get route for syntax  
// // });


// // catch any routes we haven't declared yet
// app.get('*', (req, res) => {
//     console.log('bad route');
// });

//app is listening for any request coming to this port
app.listen(PORT, () => console.log(`Server successfully listening for request on PORT ${PORT}`));