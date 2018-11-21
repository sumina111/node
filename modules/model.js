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

UserSchema.pre('save', function(next){
    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return nect(err);
        bcrypt.hash(user.password, salt, function(err,hash){
            if(err) return next(err);
        
             user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', UserSchema);