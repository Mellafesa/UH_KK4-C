//INI FILE MILIK MELLAFESA XII RPL 4!
const express = require('express')
const user = require('../controllers/users')
const router = express.Router()

const usercontroller = require('../controllers/users')

router.get('/users', usercontroller.index)

router.get('/user/:id', usercontroller.show)

  router.post('/user', usercontroller.store)

  router.put('/user/:id', usercontroller.update)

  router.delete('/user/:id', usercontroller.delete)

  module.exports = router