const require = NodeRequire
const express = NodeRequire('express')
const router = express.Router()

const signup = NodeRequire('./../controller/signup.controller.js');

router.post('/authenticate', signup.authenticate);
router.post('/register', signup.register);
router.get('/', signup.getAll);
router.get('/current', signup.getCurrent);
router.get('/:id', signup.getById);
router.put('/:id', signup.update);
router.delete('/:id', _delete);

module.exports = router;