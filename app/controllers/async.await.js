const mongoose = require('mongoose');
const Note = require('./../models/note.model.js');

mongoose.Promise = Promise;

exports.create = async (req, res) => {
    console.log("Hereeeeeeeeeeeeee")
    if(!req.body.age) {
        return res.status(400).json({
            message: "Age can not be empty"
        });
    }

    let note = new Note({
        username: req.body.username || "Untitled Note", 
        age: req.body.age,
        deleted: req.body.deleted
    });

    try {
        const data = await note.save();
        const product = await res.json({message: "successfully posted"});
    }
    catch(err) {
        res.status(500).json({
            message: "Some error occurred while creating the Note." 
        });
    }
};

exports.findAll = async(req, res) => {

    try{
        const note = await Note.find({deleted: {$ne: true}}).sort({date: 'desc'});
        const product = await res.json(note);
        return product;
    }
    catch(err) {
        res.status(500).json({
            message: "Some error occurred while retrieving notes."
        });
    }
};

exports.findOne = async (req, res) => {

    if(!req.params.id) {
        return res.status(404).json({
            message: "data not found with id " + req.params.id
        });            
    }

    try {
        const note = await Note.findById(req.params.id);
        const product = await res.json(note);
        return product;
    }

    catch(err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "data not found with id "  + req.params.id
            });                
        }
        return res.status(500).json({
            message: "Error retrieving data with id "  + req.params.id
        });
    }
};


exports.update = async (req, res) => {
    if(!req.body.age) {
        return res.status(400).json({
            message: "age can not be empty"
        });
    }
    try {
        const note = await Note.findById(req.params.id);
        note.username = await req.body.username;
        note.age = await req.body.age;

        if(!note) {
            return res.status(404).json({
                message: "data not found with id "  + req.params.id
            });
        }

        const data = await note.save();
        const message = await res.json({message: "successfully updated"});
    }

    catch(err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "data not found with id "  + req.params.id
            });                
        }
        return res.status(500).json({
            message: "Error updating note with id " +req.params.id
        });
    }
};

exports.delete = async (req, res) => {

    if(!req.params.id) {
        return res.status(404).json({
            message: "data not found with id " + req.params.id
        });
    }

    try {
        const note = await Note.findByIdAndRemove(req.params.id);
        const message = await res.json({message: "data deleted successfully!"});
    }

    catch(err)  {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                message: "data not found with id " + req.params.id
            });                
        }
        return res.status(500).json({
            message: "Could not delete note with id " + req.params.id
        });
    }
};

exports.patch = async (req, res) => {

    try {

        const note = await Note.findById(req.params.id);
        responses
        if (req.params.id) {
            delete req.params.id;
        }

        note.deleted = true;

        const save = await note.save();
        const respnose = await res.json({ message: "Updated succesfully" });
    }
    
    catch (err) {
        res.status(500).json({
            message: "Some error occurred while editing  the data."
        });
    }
};