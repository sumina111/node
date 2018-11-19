const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    name: {type: String, required:true},
    number: {type: Number, required:true},
    deleted: {type: Boolean, default: false}
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);