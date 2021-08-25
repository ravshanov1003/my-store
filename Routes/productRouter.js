const { Router } = require('express')

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct
} = require("../Controllers/productController")
const { deleteProduct } = require('../Models/productModel')

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = {
    productRouter: router
}