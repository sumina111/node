const express = require('express');
const router = express.Router();
const userService = require('./../service/service.js');

const authenticate = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({message: 'Username or password incorrect'}))
        .catch(err => next(err));
}

const register = (req, res, next) => {
    userService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

const getAll = (req,res,next) => {
    userService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

const getCurrent = (req, res, next) => {
    userService.getById(req.user.sub)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}

const update = (req, res, next) => {
    userService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

const _delete = (req, res, next) => {
    userService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}