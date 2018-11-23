module.exports = errorhandler;

function errorhandler(err, req, res, next){
    if (typeof (err) === 'string'){
        return res.status(400).json({message: err});
    }
    if(err.email === 'validationError'){
        return res.status(400).json({message: err.message});
    }
    if(err.email === 'unauthorized'){
        return res.status(401).json({message: 'invalid'});
    }
    return res.status(500).json({message: err.message})
}