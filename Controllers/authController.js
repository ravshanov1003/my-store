const jwt = require('jsonwebtoken')

let users = require('../data/users.json')
let { findUser } = require('../Models/authModel')

async function login(req, res) {
    const secret = 'secret'
    const { username, password } = req.body

    try {
        const user = await findUser(username)
        if (!user) {
            res.status(400).send({
                message: 'Login is incorrect'
            })
        }
        const isMatch = password === user.password
        if (!isMatch) {
            res.status(400).send({
                message: 'Password is incorrect'
            })
        }

        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1d' })
        res.status(200).send({
            token
        })
    } catch (e) {
        console.log(e)
    }

}

module.exports = {
    login,

}