const expressJwt = require('express-jwt');
const config = require('./../config/config.js');
const userService = require('./../model/model.js');
const bcrypt = require('bcryptjs');

module.exports = jwt;

const jwt = () => {
    const secret = config.secret;
    return expressJwt({secret, isRevoked}).unless({
        path: [

        ]
    });
}

const isRevoked = async(req, payload, done) => {
    const user = await userService.getById(payload.sub);
    if(!user){
        return done(null, true);
    }
    done();
}