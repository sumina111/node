let mongoose = require('mongoose')
let Schema = mongoose.Schema

const bcrypt = require('bcrypt')

let UserSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    userName : {
        type: String
    },
    password : {
        type: String,
        required: true
    }
})
module.exports = mongoose.module('User', UserSchema);