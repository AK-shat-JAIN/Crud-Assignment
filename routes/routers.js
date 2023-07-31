const express = require('express')
const { registerUser, loginUser } = require('../controlles/controllers')
const router = express.Router()

router.post('/register', registerUser)                           // 1. Create a route for registering a user 
router.post('/login', loginUser)                                 // 2. Create a route for logging in a user

module.exports = router