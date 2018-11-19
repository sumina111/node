// const express = require("express");
// const router = express.Router();

// const notes = require('../controllers/note.controller.js');

// router.post('/notes', notes.create);

// router.get('/notes', notes.findAll);

// router.get('/notes/:noteId', notes.findOne);

// router.put('notes/:noteId', notes.update);

// router.delete('/notes/:noteId', notes.delete);

// module.exports = router;
module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}