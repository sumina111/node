let express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let app = express();
let router = express.Router();

const config = require('./modules/signup/config/config.js')
const route = require('./routes/index.js')

app.use(bodyparser.urlencoded({extended: true}))

app.use(express.json());

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {console.log('connected to db');
}).catch(err => {console.log('couldnot connect to db', err);
                process.exit();
});


app.get('/', (req, res) => {
    res.json({message: 'port 3000'});
});


app.listen(3000, () => {console.log('port 3000')
});

