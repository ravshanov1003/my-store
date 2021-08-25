const express = require('express')

const { getProducts, getProduct, createProduct, updateProduct } = require('./Controllers/productController')
const { productRouter } = require('./Routes/productRouter')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/products', productRouter)

app.listen(3000, _ => console.log('server is running'))