const mongoose = require('mongoose');

async function validateBook(next) {
    const book = this;
    if (book.isModified('author') && book.isModified('name')) {
        const existingBook = await mongoose.models.Book.findOne({ author: book.author, name: book.name });
        if (existingBook) {
            const error = new Error('Book with specified name and author already exists');
            next(error);
        }
    }
    next();
}


async function validateBookOnUpdate(next) {
    const book = this._update;
    if (book.email) {
        const existingBook = await mongoose.models.Book.findOne({ author: book.author, name: book.name });
        if (existingBook) {
            const error = new Error('Book with specified name and author already exists');
            next(error);
        }
    }
    next();
}

module.exports = {
    validateBook, validateBookOnUpdate
};