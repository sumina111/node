const express = require('express');
const router = express.Router(); 



module.exports = (router) => {
    const signup = require('./../modules/signup.controller')

    // Create a new Note
    router.post('/addData/user', signup.addData);

}