const mongoose = require('mongoose')
const Form = require('./model.js')

exports.addData = async (res, req) => {
    check('firstName')
        .isAlpha(),
    check('lastName')
        .isAlpha(),
    check('email')
        .isEmail()
        .custom(email => {
            if(alreadyHaveEmail(email)){
                return Promise.reject('Email already registered')
            }
        }),
    check('password')
        .isLength({ min : 6 })
        .withMessage('Must be 6 letters')
        .isAlphanumeric()
        .withMessage('must be alphanumeric'),

    firstName = req.body.firstName
    lastName = req.body.lastName
    email = req.body.email
    password = req.body.password
}