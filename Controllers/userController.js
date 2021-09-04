const { response } = require('express')
const User = require('../models/userModel')
const { writeDataToFile } = require('../utils')

async function notFound(user) {
    if (!user) {
        res.status(404).send({
            message: 'User not founded'
        })
    }
}

async function getUsers(req, res) {
    try {
        const user = await User.read()
        notFound(user)
        res.send(user)
    } catch (e) {
        console.log(e)
    }
}

async function getUser(req, res) {
    const { id } = req.params
    try {
        const user = await User.readById(id)
        notFound(user)
        res.send(user)
    } catch (e) {
        console.log(e)
    }
}

async function createUser(req, res) {
    const { fullName, age, username, password } = req.body
    let user = {
        fullName,
        age,
        username,
        password
    }
    try {
        const newUser = await User.create(user)
        res.send(newUser)
    } catch (e) {
        console.log(e)
    }
}

async function updateUser(req, res) {
    const { id } = req.params
    const { fullName, age, username, password } = req.body
    try {
        let user = await User.readById(id)
        notFound(user)
        const userData = {
            fullName: fullName || user.fullName,
            age: age || user.age,
            username: username || user.username,
            password: password || user.password
        }
        let updatedUser = await User.update(id, userData)
        res.send({
            message: 'User updated'
        })

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
}