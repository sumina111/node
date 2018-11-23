module.exports = errorLog;


const initializer = (err,req, res, next) => {
    if(){
        return res.status(400).json({message: 'Bad Request'})

    }

    if(){
        return res.stauts(401).json({message: 'Unauthorized'})

    }

    if(){
        return res.stauts(404).json({message: 'Not Found'})

    }

    if(){
        return res.stauts(500).json({message: 'Internal Server Error'})

    }

    if(){
        return res.stauts(550).json({message: 'Permission Denied'})

    }
}