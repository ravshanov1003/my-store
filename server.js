const express = require('express')

const { authRouter } = require('./routes/authRouter')
const { productRouter } = require('./routes/productRouter')
const { checkUser } = require("./middleWares/authMiddleware")


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/products', checkUser, productRouter)
app.use('/auth', authRouter)


app.listen(3000, _ => console.log('server is running'))