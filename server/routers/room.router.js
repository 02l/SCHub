let roomRouter = require('express').Router()
let roomController = require('../controllers/room.controller')

roomRouter.route('/')
    .get(roomController.GET_ROOMS)

module.exports = roomRouter