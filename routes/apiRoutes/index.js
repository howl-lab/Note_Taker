const router = require('express').Router();
//destructure to use like this
const {getNotes, postNote, deleteNote} = require('../../controller/notesController'); 

router.route('/notes')
    .get(getNotes)
    .post(postNote);

router.delete('/notes/:id', deleteNote);

module.exports = router; 