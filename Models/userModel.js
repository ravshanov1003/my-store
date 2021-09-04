const { response } = require('express')
const { v4: uuid } = require('uuid')

const users = require('../data/users.json')
const { writeDataToFile } = require('../utils')

const read = () => {
    return new Promise((resolve, reject) => {
        resolve(users)
    })
}

const readById = (id) => {
    return new Promise((resolve, reject) => {
        let user = users.find(p => p.id === id)
        resolve(user)
    })
}

const create = (user) => {
    return new Promise((resolve, reject) => {
        let newUser = {
            id: uuid(),
            ...user
        }
        users.push(newUser)
        writeDataToFile('./users.json', users)
        resolve(newUser)
    })
}

const update = (id, user) => {
    return new Promise((resolve, reject) => {
        const index = users.find(p => p.id === id)
        users[index] = { id, ...user }
        writeDataToFile('./users.json', users)
        resolve(1)
    })
}

module.exports = {
    read,
    readById,
    create,
    update
}