const express = require("express")
const router = express.Router()

const userController = require('../controllers/users')

router.get('/ruangans', userController.index)

router.get('/ruangan/:id', userController.show)
  
router.post('/ruangan', userController.store)

router.put('/ruangan/:id', userController.update)

router.delete('/ruangan/:id', userController.delete)

module.exports = router