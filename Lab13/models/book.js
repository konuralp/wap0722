let book = [];
let counter = 0;
module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = counter++;
        book.push(this);
        return this;
    }

    update() {
        const index = book.findIndex(p => p.id == this.id);
        if (index > -1) {
            book.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return book;
    }

    static findById(bookId) {
        const index = book.findIndex(p => p.id == bookId);
        if (index > -1) {
            return book[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = book.findIndex(p => p.id == bookId);
        if (index > -1) {
            book = book.filter(p => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}