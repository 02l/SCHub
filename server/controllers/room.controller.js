let roomController = {}

roomController.GET_ROOMS = (req, res) => {
    res.status(200).send({
        rooms: [
            {
                name: "02l's Room",
                currentSong: "Get diggy with it",
                users: [
                    {
                        name: "Mike Mitrakos"
                    },
                    {
                        name: "Gabe Mitrakos"
                    }
                ]
            },
            {
                name: "MY ROOM, DON'T COME IN",
                currentSong: "Cool it",
                users: [
                    {
                        name: "Drew Neillie"
                    },
                    {
                        name: "Mike Flores"
                    }
                ]
            },
            {
                name: "Kool Kids Room",
                currentSong: "Spice Girlz Rok",
                users: [
                    {
                        name: "Nick Mitrakos"
                    },
                    {
                        name: "Senior Citizen Sherry"
                    }
                ]
            }
        ]
    })
}

module.exports = roomController