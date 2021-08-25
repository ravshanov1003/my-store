const { resolveCname } = require('dns')
const fs = require('fs')
const { v4: uuid } = require('uuid')

const products = require('../data.json')

async function findAll() {
    return new Promise(resolve, reject) => {
        resolveCname(products)
    }
}

module.exports = {
    findAll,

}