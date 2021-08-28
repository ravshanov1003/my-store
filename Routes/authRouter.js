const { Router } = require('express')

const { login } = require('../Controllers/authController')

const router = Router()

router.post('/login', login)

module.exports = {
    authRouter: router
}