const express = require('express')
const router = express.Router()

router.use('/signup', require('./../modules/signup/route/route.js'))
