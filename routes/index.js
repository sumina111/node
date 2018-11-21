const express = require('express');
const router = express.Router(); 



module.exports = (router) => {
    const signup = require('./../modules/signup.controller')

    router.post('/addData/user', signup.getData);

}