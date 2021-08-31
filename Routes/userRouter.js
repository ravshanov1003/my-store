const { Router } = require('express')
const { getUsers, getUser, createUser } = require('../controllers/userController')

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)

module.exports = { userRouter: router }