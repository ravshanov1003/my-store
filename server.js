const express = require('express')

const { getProducts, getProduct, createProduct, updateProduct } = require('./Controllers/storeController')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/products', getProducts)

// Get product by Id
app.get('/api/products/:id', getProduct)

// Create product
app.post('/api/products', createProduct)

// Update product
app.put('/api/products/:productId', updateProduct)

// Delete product
//app.delete("/api/products/:productId", apiProduct.deleteApiProduct)

app.listen(3000, _ => console.log('server is running'))