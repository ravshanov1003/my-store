const users = require('../data/users.json')

async function findUser(username) {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.username === username)
        resolve(user)
    })
}

module.exports = {
    findUser
}