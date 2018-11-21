const mongoose = require('mongoose')
const Form = require('./model.js')
const bycrypt = require('bycrypt')


// exports.addData = async (res, req) => {
//     check('firstName')
//         .isAlpha(),
//     check('lastName')
//         .isAlpha(),
//     check('email')
//         .isEmail()
//         .custom(email => {
//             if(alreadyHaveEmail(email)){
//                 return Promise.reject('Email already registered')
//             }
//         }),
//     check('password')
//         .isLength({ min : 6 })
//         .withMessage('Must be 6 letters')
//         .isAlphanumeric()
//         .withMessage('must be alphanumeric'),

//     firstName = req.body.firstName
//     lastName = req.body.lastName
//     email = req.body.email
//     password = req.body.password
// }

exports.getData = (req, res) => {

    bcrypt.hash(req.body.password, SALT_VAl, (err, hash) => {

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: hash,
            createdDate: req.body.createdDate,
            
        }).then((data) => {
            res.json({ message: "Successfully posted" });
        }).catch((err) => {
            return console.error(err);
        });

    });
}