let express = require('express');
let app = express();

// express.static(root, [options]);


app.use(express.static('/images'));


app.get('/', function(req, res){
    res.send('port 3000');
});

app.listen(3000, () => {console.log('port 3000')
});
