module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    
    app.post('/notes', notes.create);

    app.get('/notes', notes.finaAll);

    app.get('/notes/:noteId', notes.findOne);

    app.put('notes/:noteId', notes.update);

    app.delete('/notes/:noteId', notes.delete);
}