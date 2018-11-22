const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const expressValidator = require('express-validator');

const { body,validationResult } = require('express-validator/check');

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressValidator());

module.exports = {
    User: require('./routes/index.js')
}
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {console.log('connected to db');
}).catch(err => {console.log('couldnot connect to db', err);
                process.exit();
});


// app.get('/', (req, res) => {
//     res.render('port 3000');
// });


app.listen(3000, () => {console.log('port 3000')
});
