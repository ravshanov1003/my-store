const { Router } = require('express')

const { login } = require('../controllers/authController')
const { authValidation } = require('../middleWares/authValidation')

const router = Router()

router.post('/login', authValidation, login)

module.exports = {
    authRouter: router
}