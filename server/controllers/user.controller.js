let userController = {}

userController.CREATE_USER = (req, res) => {
    let email = req.body.email
    let password = req.body.password

    res.status(200).send('Created the user: ' + email + ' and password of ' + password)
}

module.exports = userController