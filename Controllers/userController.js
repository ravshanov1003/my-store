const { response } = require('express')
const User = require('../models/userModel')
const { writeDataToFile } = require('../utils')

async function notFound() {
    if (!user) {
        res.status(404).send({
            message: 'User not founded'
        })
    }
}

async function getUsers(req, res) {
    try {
        const user = await User.read()
        notFound()
        res.send(user)
    } catch (e) {
        console.log(e)
    }
}

async function getUser(req, res) {
    const { id } = req.params
    try {
        const user = await User.readById(id)
        notFound()
        res.send(user)
    } catch (e) {
        console.log(e)
    }
}

async function createUser(req, res) {
    const { fullName, age, username, password } = req.body
    let newUser = {
        fullName,
        age,
        username,
        password
    }
    users.push(newUser)
    writeDataToFile('./users.json', users)
    res.send(newUser)
}

module.exports = {
    getUsers,
    getUser,
    createUser
}