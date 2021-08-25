const fs = require('fs')
const uuid = require('uuid')

const Product = require('../Models/storeModel')

async function getProducts(req, res) {
    try {
        const products = await Product.getProducts()
        res.send(products)
    } catch (err) {
        console.log(err)
    }
}

async function getProduct(req, res) {
    const { id } = req.params
    const product = await Product.getProduct(id)
    if (!product) {
        res.status(404).send({
            message: 'Product not found'
        })
    }
}

async function createProduct(req, res) {
    const { name, description, price } = req.body
    const product = {
        name,
        description,
        price
    }
    try {
        const newProduct = await Product.createProduct(product)
        res.send(newProduct)
    } catch (err) {
        console.log(err)
    }
}

async function updateProduct(req, res) {
    const { id } = req.params
    const { name, description, price } = req.body
    try {
        const product = await Product.getProduct(id)
        if (!product) {
            res.status(404).send({
                message: 'Product not found'
            })
        } else {
            const productData = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }

            const updatedProduct = await Product.updateProduct(id, productData)
            res.send({
                message: 'Product has been updated'
            })
        }
    } catch (err) {
        console.log(err)
    }
}

const deleteApiProduct = (req, res) => {
    const { productId } = req.params;
    const newProduct = products.filter((p) => p.id = productId)
    fs.writeFile('data.json', JSON.stringify(newProduct, null, 2), "utf-8", (err) => {
        if (err) {
            res.send({
                message: "error in creation"
            })
        } else {
            res.status(200).send({
                message: "Product has been deleted"
            })
        }
    })
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,

    deleteApiProduct,
}