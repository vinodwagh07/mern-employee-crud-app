const express = require('express')
const router = express.Router()

const createUserController = require('../controllers/createUser')
const getUsersController = require('../controllers/getUsers')

router.get('/getAllUsers',getUsersController)
router.post('/createUser',createUserController)

module.exports = router;