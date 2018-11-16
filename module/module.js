const mongoose = require('mongoose');

const schema = mongoose.schema;

mongoose.connect('mongodb://localhost:3000/my_database');

const listSchema = new schema({
    userName: String,
    userDob: Date,
});

module.exports = db.model('List', listSchema);

