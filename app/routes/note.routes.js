const express = require("express");
const router = express.Router();

const notes = require('../controllers/note.controller.js');

app.post('/notes', notes.create);

app.get('/notes', notes.finaAll);

app.get('/notes/:noteId', notes.findOne);

app.put('notes/:noteId', notes.update);

app.delete('/notes/:noteId', notes.delete);

module.exports = router;