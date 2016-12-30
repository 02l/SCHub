let rootRouter = require('express').Router()
let soundCloudRouter = require('./soundcloud.router')
let userRouter = require('./user.router')
let roomRouter = require('./room.router')

rootRouter.use('/soundcloud', soundCloudRouter)
rootRouter.use('/user', userRouter)
rootRouter.use('/room', roomRouter)

module.exports = rootRouter