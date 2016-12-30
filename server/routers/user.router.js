let userRouter = require('express').Router()
let userController = require('../controllers/user.controller')

userRouter.route('/')
    .post(userController.CREATE_USER)

module.exports = userRouter