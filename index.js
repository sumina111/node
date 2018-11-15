let express = require('express');
const port = 3000;
let app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000, () => {console.log('port 3000')
});