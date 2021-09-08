const express = require('express')

const { userRouter } = require('./routes/userRouter')
const { authRouter } = require('./routes/authRouter')
const { productRouter } = require('./routes/productRouter')
const { checkUser } = require("./middleWares/authMiddleware")
const { checkPermission } = require('./middleWares/permissionMiddleware')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/products', checkUser, checkPermission('admin'), productRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)

app.listen(3000, _ => console.log('server is running'))