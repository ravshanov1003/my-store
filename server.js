const express = require('express')

const apiProduct = require('./Controllers/storeController')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/products', apiProduct.getApiProduct)

// Get product by Id
app.get('/api/products/:id', apiProduct.getApiProductById)

// Create product
app.post('/api/products', apiProduct.createApiProduct)

// Update product
app.put('/api/products/:productId', apiProduct.updateApiProduct)

// Delete product
app.delete("/api/products/:productId", apiProduct.deleteApiProduct)

app.listen(3000, _ => console.log('server is running'))