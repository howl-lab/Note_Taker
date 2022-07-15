const fs = require('fs');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    fs.readFile("db.json", "utf8", function (err, data) {
        if (err) throw err;

        var notesResult = [];

        res.send(notesResult);
    });
});

router.post('/notes', (req, res) => {

});

router.delete('/notes/:id', (req, res) => {

});

module.exports = router;