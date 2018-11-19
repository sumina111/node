const express = require("express");
const router = express.Router();

module.exports = (app) => {
    const notes = require('../controllers/async.await.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with id
    app.get('/notes/:id', notes.findOne);

    // Update a Note with id
    app.put('/notes/:id', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:id', notes.delete);

    app.patch('/patch/:id', responses.patch); 

}