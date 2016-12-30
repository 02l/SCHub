let soundcloudController = {}

soundcloudController.GET_PLAYLIST = (req, res) => {
    let playlistName = req.params['name']
    res.status(200).send('Hey there :) Here is your playlist: ', playlistName)
}

module.exports = soundcloudController