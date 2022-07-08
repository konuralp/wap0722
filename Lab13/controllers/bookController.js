const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.bookId));
}

exports.save = (req, res, next) => {
    const prod = req.body;
    const savedProd = new Book(null, prod.title, prod.isbn, prod.publishedDate, prod.author).save();
    res.status(201).json(savedProd);
}

exports.update = (req, res, next) => {
    const prod = req.body;
    const updatedProd = new Book(parseInt(req.params.bookId), prod.title, prod.isbn, prod.publishedDate, prod.author).update();
    res.status(200).json(updatedProd);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(parseInt(req.params.bookId));
    res.status(200).end();
}