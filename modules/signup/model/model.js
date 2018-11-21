let mongoose = require('mongoose')
let Schema = mongoose.Schema

const bcrypt = require('bcrypt')
// const { check } = require('express-validator/check')

const SALT_WORK_FACTOR = 10;

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
    },
    createdDate: { 
        type: Date, 
        default: Date.now 
    }
});

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });

module.exports = mongoose.model('User', UserSchema);