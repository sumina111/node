const require = NodeRequire
const express = NodeRequire('express')
const router = express.Router()

const signUp = NodeRequire('../modules/signup/route/route.js')
const errorLog = NodeRequire('./../modules/error-log/route.js')

const app = express();


((routerHelper) => {
    routerHelper.init = (app) => {
        app.use('/signup', signUp.router)
        app.use('/error', errorLog.router)
    }
})(module.exports(routerHelper));