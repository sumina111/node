const express = require('express');
const router = express.Router(); 

module.export = (route) => {
    const form = require('./../modules/controller.js')

    route.post('/post', form.addData)
}