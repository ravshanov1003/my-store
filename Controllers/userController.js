const bcrypt = require('bcryptjs')
const { v4: uuid } = require('uuid')

const User = require('../models/userModel')

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
    console.log(req.user);
    const { fullName, age, username, password, role } = req.body
    try {
        const checkUser = await User.findUser(username)
        if (checkUser) {
            res.status(400).send({
                message: `${username} already exists`
            })
        } else {
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = {
                id: uuid(),
                fullName,
                age,
                username,
                password: hashedPassword,
                role
            }
            await User.createUser(newUser)
            res.send({
                message: 'User has been created'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(req, res) {
    const { id } = req.params
    const { fullName, age, username, password, role } = req.body
    try {
        let user = await User.readById(id)
        notFound(user)
        const userData = {
            fullName: fullName || user.fullName,
            age: age || user.age,
            username: username || user.username,
            password: password || user.password,
            role: role || user.role
        }
        let updatedUser = await User.update(id, userData)
        res.send({ updatedUser })
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(req, res) {
    const { id } = req.params
    try {
        const user = await User.readById(id)
        notFound(user)
        await User.deleteU(id)
        res.send({
            message: 'User has been deleted'
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
    deleteUser
}