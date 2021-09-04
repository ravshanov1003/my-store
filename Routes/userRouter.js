const { Router } = require('express')
const { getUsers, getUser, createUser, updateUser } = require('../controllers/userController')

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)

module.exports = { userRouter: router }