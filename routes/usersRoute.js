const express = require('express');
const router = express.Router();
const fileUpload = require('../middleware/img-upload')

const userController = require('../controllers/userController');


router.get('/email', userController.getUserByEmail)
    .put('/email/:email', fileUpload,userController.updateUserByEmail);

router.post('', fileUpload, userController.createUser)
    .get('', userController.getUsers)
    .get('/:id', userController.getUser)
    .put('/:id', fileUpload, userController.updateUser)
    .delete('/:id', userController.deleteUser);


module.exports = router;