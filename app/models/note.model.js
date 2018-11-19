const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {type: String, required:true},
    content: {type: Number, required:true},
    deleted: {type: Boolean, default: false}
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);