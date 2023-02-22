const mongoose = require('mongoose');
const { validateBook, validateBookOnUpdate } = require('../middleware/bookValidation');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    issueDate: { type: Number, default: Date.now },
    type: {type: String , required: true, lowercase: true},
    photo: {
        type: String,
        default: 'default.jpg'
    }
});

bookSchema.pre('save', validateBook);
bookSchema.pre('findOneAndUpdate', validateBookOnUpdate);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;