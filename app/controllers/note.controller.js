const Note = require('../models/note.model.js');


exports.create = (req,res) => {
    if(!req.body.content){
        return res.status(400).send({
            message: "Note content cannot be empty"
        })
    }
    const note = new Note({
        title: req.body.title || "untitled note",
        content: req.body.content
    })
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "success" || "error occured"
        });
    });
};

exports.findAll = (req, res) => {
    Note.find()
    .then(notes =>  {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: "success" || "error occured"
        });
    });
};

exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
    .then(note => {
        if(!note){
            return res.status(404).send({
                message:'note not found with id' + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "note not found with id" + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "error retriving note with id" + req.params.noteId
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

exports.delete = (req,res) => {
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note){
            return res.status(404).send({
                message:"note not found with id" + req.params.noteId
            });
        }
        res.send({message: "note deleted successfully"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound'){
            return res.status(404).send({
                message: "note not found with id" + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "could not delete note with id" + req.params.noteId
        });
    });
};

exports.patch = (req, res) => {

    Note.findById(req.params.id)
    .then(note => {
        if (req.params.id) {
            delete req.params.id;
        }

        note.deleted = true;

        note.save();
        res.json({ message: "Updated succesfully" });

    }).catch(err => {
        return res.status(500).json({
            message: "Some error occurred while editing  the data."
        });
    });
};
   