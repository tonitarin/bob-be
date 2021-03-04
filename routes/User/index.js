const express = require('express')
const userController = require('../../controllers/user-controllers')

const router = express.Router()


router.get('/', userController.getUsers)
router.post('/', userController.postUsers)
router.put('/:name', userController.updateUser)
router.delete('/:name', userController.deleteUser)

module.exports = router