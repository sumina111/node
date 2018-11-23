const config = require('./../config/config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./../config/config.js');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const authenticate = async({username, password}) => {
    const user = await User.findOne({username});
    if(user && bcrypt.compareSync(password, user.hash)){
        const { hash, ...userWithoutHash} = user.toObject();
        return{
            ...userWithoutHash,
            token
        };
    };
};

const getAll = asycn() => {
    return await User.find().select('-hash');
};

const getById = async(id) => {
    return await User.findById(id).select('-hash');
}

const create = async() => {
    if (await User.findOne({username: URLSearchParams.username})){
        throw 'Username ' + URLSearchParams.username + ' is already taken';
    }
    const user = new User(userParam);

    if(userParam.password){
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    await user.save();
};

const update = async(id, userParam) => {
    const user = await User.findById(id);

    if(!user) throw 'User not found';
    if(user.username !== userParam.username && await User.findOne({username:userParam.username})){
        throw 'Username ' + userParam.username + 'is already taken';
    }

    if(userParam.password){
        userParam.hash =bcrypt.hashSync(userParam.password, 10);
    }

    Object.assign(user, userParam);

    await user.save();
}

const _delete = async(id) => {
    await User.findByIdAndRemove(id);
}
