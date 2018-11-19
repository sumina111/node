let express = require('express');
const bodyparser = require('body-parser');
let app = express();
let router = express.Router();

app.use(bodyparser.urlencoded({extended: true}))

app.use(bodyparser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {console.log('successful');
}).catch(err => {console.log('couldnot connect to db', err);
                process.exit();
});


app.get('/', (req, res) => {
    res.send('port 3000');
});

require('./app/routes/note.routes.js')(app);
require('./app/routes/asyncawait.js')(app);

app.listen(3000, () => {console.log('port 3000')
});

