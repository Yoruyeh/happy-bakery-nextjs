// user routes
const express = require('express')
const router = express.Router()

// import auth
const { authenticated } = require('../../middleware/api-auth')

// import controller
const userController = require('../../controllers/userController')

// user login
router.post('/signin', userController.signIn)
router.post('/', userController.signUp)

// user info
router.put('/password', authenticated, userController.putUserPassword)
router.get('/orders', authenticated, userController.getUserOrders)
router.get('/', authenticated, userController.getUserSetting)
router.put('/', authenticated, userController.putUserSetting)

module.exports = router
