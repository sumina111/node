let express = require('express');
const bodyparser = require('body-parser');
let app = express();
let router = express.Router();
const config = require('./modules/config')
const route = require('./routes/index')
app.use(bodyparser.urlencoded({extended: true}))

app.use(express.json())


const dbConfig = require('config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {console.log('connected to db');
}).catch(err => {console.log('couldnot connect to db', err);
                process.exit();
});


// app.get('/', (req, res) => {
    // res.render('port 3000');
// });


app.listen(3000, () => {console.log('port 3000')
});

