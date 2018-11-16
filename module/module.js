const mongoose = require('mongoose');

const schema = mongoose.schema;

mongoose.connect('mongodb://localhost:3000/my_database');

const listSchema = new schema({
    userName: String,
    password: {type: String, required: true},
    date: Date,
});

module.exports = mongoose.model('List', listSchema);

