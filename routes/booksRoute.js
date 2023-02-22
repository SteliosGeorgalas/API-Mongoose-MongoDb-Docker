const express = require('express');
const router = express.Router();
const fileUpload = require('../middleware/img-upload')

const booksController = require('../controllers/booksController');


router.get('/type', booksController.getBooksByType);

router.post('', booksController.createBook)
    .get('', booksController.getBooks)
    .get('/:id', booksController.getBook)
    .put('/:id', fileUpload, booksController.updateBook)
    .delete('/:id', booksController.deleteBook);


module.exports = router;