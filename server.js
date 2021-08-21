const express = require('express')
const uuid = require('uuid')
const fs = require('fs')

const products = require('./data.json')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/products', (req, res) => {
    res.send(products)
})

// Get product by Id
app.get('/api/products/:id', (req, res) => {
    const { productId } = req.params;
    const product = products.find((p) => p.id = productId)
    if (!product) {
        res.send({
            message: 'Product not found'
        })
    } else {
        res.send(product)
    }
})

// Create product
app.post('/api/products', (req, res) => {
    const { name, description, price } = req.body
    const product = {
        id: uuid.v4(),
        name,
        description,
        price
    }
    products.push(product)
    fs.writeFile('data.json', JSON.stringify(products, null, 2), "utf-8", (err) => {
        if (err) {
            res.send({
                message: "error in creation"
            })
        } else {
            res.status(201).send({
                message: "Product has been created"
            })
        }
    })
})

// Update product
app.put('/api/products/:productId', (req, res) => {
    const { name, description, price } = req.body;
    const { productId } = req.params
    const product = products.find(p => p.id === productId)
    if (!product) {
        res.send({
            message: 'Product not found'
        })
    } else {
        const newProduct = {
            name: name || product.name,
            description: description || product.description,
            price: price || product.price
        }
        const index = products.findIndex(p => p.id === productId)
        products[index] = {
            id: productId,
            ...newProduct
        }
    }
    fs.writeFile('data.json', JSON.stringify(newProduct, null, 2), "utf-8", (err) => {
        if (err) {
            res.send({
                message: "error in creation"
            })
        } else {
            res.status(200).send({
                message: "Product has been updated"
            })
        }
    })
})

// Delete product
app.delete("/api/products/:productId", (req, res) => {
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
})

app.listen(3000, _ => console.log('server is running'))