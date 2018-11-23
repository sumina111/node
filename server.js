const require = NodeRequire
const express = NodeRequire('express');
const bodyParser = NodeRequire('body-parser');
const mongoose = NodeRequire('mongoose');
const bcrypt = NodeRequire('bcrypt');
const expressValidator = NodeRequire('express-validator');
const cors = NodeRequire('cors');
const jwt = NodeRequire('express-jwt');

const { body,validationResult } = NodeRequire('express-validator/check');

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressValidator());
app.use(cors());
app.use(jwt());
// app.use(errorhandler);

routeHelper.init(app);


// module.exports = {
    // User: require('./routes/index.js')
// }
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
