const express = require('express');

const UserController = require('../controller/users');

const router = express.Router();

// CREAT - POST
router.post('/', UserController.createNewUser);

//READ - GET
router.get('/', UserController.getAllUsers);

//UPDATE - PATCH
router.patch('/:idUser', UserController.updateUser);

//DELETE - DELETE
router.delete('/:idUser', UserController.deleteUser)


module.exports = router;