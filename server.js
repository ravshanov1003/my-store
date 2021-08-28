const express = require('express')

const { getProducts, getProduct, createProduct, updateProduct } = require('./controllers/productController')
const { authRouter } = require('./Routes/authRouter')
const { productRouter } = require('./Routes/productRouter')
const { checkUser } = require("./middleWares/authMiddleware")


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/products', checkUser, productRouter)
app.use('/auth', authRouter)


app.listen(3000, _ => console.log('server is running'))