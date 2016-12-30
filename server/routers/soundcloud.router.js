let soundcloudRouter = require('express').Router()
let soundcloudController = require('../controllers/soundcloud.controller')

soundcloudRouter.route('/playlists/:name')
    .get(soundcloudController.GET_PLAYLIST)

module.exports = soundcloudRouter