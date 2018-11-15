let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(4000, () => {console.log('port 4000')
});