const { resolveCname } = require('dns')
const fs = require('fs')
const { v4: uuid } = require('uuid')

const products = require('../data.json')

async function findAll() {
    return new Promise((resolve, reject) => {
        resolveCname(products)
    })
}

function findById(id) {
    return new Promise((res, rej) => {
        const product = products.find((p) => p.id === id)
        res(product)
    })
}

module.exports = {
    getProducts: findAll,
    getProduct: findById,

}