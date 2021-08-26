const Product = require('../Models/productModel')

async function getProducts(req, res) {
    try {
        const products = await Product.getProducts()
        res.send(products)
    } catch (err) {
        console.log(err)
    }
}

// Get product by Id
async function getProduct(req, res) {
    const { id } = req.params
    const product = await Product.getProduct(id)
    if (!product) {
        res.status(404).send({
            message: 'Product not found'
        })
    } else {
        res.send(product)
    }
}

// Create product
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

// Update product
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

// Delete product
async function deleteProduct(req, res) {
    const { id } = req.params
    try {
        const product = await Product.getProduct(id)
        if (!product) {
            res.status(404).send({
                message: 'Product not found'
            })
        } else {
            await Product.deleteProduct(id)
            res.send({
                message: "Product has been deleted"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}