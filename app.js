const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/usersRoute')
const booksRouter = require('./routes/booksRoute')

mongoose.connect('mongodb://localhost:27017/my-mongo', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('MongoDB connected!');
});


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());

app.use('/users', usersRouter)
app.use('/books', booksRouter)

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


