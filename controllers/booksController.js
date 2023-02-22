const Book = require('../models/booksModel');

const booksController = {};

booksController.getBooks = async (req, res) => {
    try {
        const books = await Book.find().select('-__v');
        res.status(200).send({ success: true, data: books });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

booksController.getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).send({ success: true, data: book });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

booksController.getBooksByType = async (req, res) => {
    try {
        const book = await Book.findOne({ type: req.body.type });
        res.status(200).send({ success: true, data: book });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

booksController.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send({ success: true, data: book });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

booksController.updateBook = async (req, res) => {
    try {
        console.log("photo")
        if (req.file){
            const photo = req.file.filename;
            console.log(photo)
            req.body.photo = photo
        }
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).send({ success: true, message: "Book Succesfully Updated" , data: book});
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

booksController.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(202).send({ success: true, data: book, message: "Book Successfully deleted" });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};


module.exports = booksController;