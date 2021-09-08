const { response } = require('express')
const { v4: uuid } = require('uuid')

let users = require('../data/users.json')
const { writeDataToFile } = require('../utils')

async function findUser(username) {
    return new Promise((resolve, reject) => {
        const user = users.find(u => u.username === username)
        resolve(user)
    })
}

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

async function createUser(user) {
    return new Promise((resolve, reject) => {
        users.push(user)
        writeDataToFile('./data/users.json', users)
        resolve(user)
    })
}

const update = (id, user) => {
    return new Promise((resolve, reject) => {
        const index = users.find(p => p.id === id)
        users[index] = { id, ...user }
        writeDataToFile('./data/users.json', users)
        resolve(1)
    })
}

const deleteU = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find(p => p.id === id)
        writeDataToFile('./users.json', user)
        resolve(user)
    })
}

module.exports = {
    read,
    readById,
    createUser,
    update,
    deleteU,
    findUser
}