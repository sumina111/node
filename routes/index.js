const express = require('express')
const router = express.Router()

const app = express();

app.use('/api', require('./../modules/signup/route/route.js'))


// module.exports = router;