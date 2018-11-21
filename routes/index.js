const express = require('express');
const router = express.Router(); 

const signup = require('./../modules/controller')

router.post('/addData/user', signup.addData);

module.exports = router;