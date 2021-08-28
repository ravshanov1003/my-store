const jwt = require('jsonwebtoken')

const User = require('../models/authModel')

async function login(req, res) {
    const secret = 'secret'
    const { username, password } = req.body

    console.log(req.body)
    try {
        let user = await User.findUser(username)
        if (!user) {
            res.status(400).send({ message: 'Login is incorrect' })
        }

        const isMatch = password === user.password
        if (!isMatch) {
            res.status(400).send({ message: 'Password is incorrect' })
        }
        console.log('error')

        const token = jwt.sign({ userId: user.id, username: username }, secret, { expiresIn: '1d' })
        res.status(200).send({
            token: token
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    login
}