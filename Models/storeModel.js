const { resolveCname } = require('dns')
const fs = require('fs')
const { resolve } = require('path')
const { v4: uuid } = require('uuid')

const products = require('../data.json')
const { writeDataToFile } = require('../utils')

async function findAll() {
    return new Promise((resolve, reject) => {
        resolveCname(products)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {
            id: uuid(),
            ...product
        }
    })
    products.push(newProduct)
    writeDataToFile('../data.json', products)
    resolve(newProduct)
}

function update(id, product) {
    return new Promise((resolve, reject) => {

    })
}

module.exports = {
    getProducts: findAll,
    getProduct: findById,

}