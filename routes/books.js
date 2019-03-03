const express = require("express");
const router = express.Router();

const Book = require("../models").Book;

router.get("/books", (req, res) => {
  let options = { limit: 10, offset: 0 };
  let paginationButtons = [];
  let booksCount = 0;
  let currentPage = 1;

  // For pagination links
  Book.count()
    .then(totalBooks => {
      booksCount = totalBooks;

      const totalPaginationButtons = (totalBooks / 5) + 1;

      // Get the total number of buttons to be displayed
      for (let i = 1; i < totalPaginationButtons; i++) {
        paginationButtons.push(i);
      }
      
      // If there is no need for pagination links
      if (totalBooks <= 5) {
        paginationButtons = [];
      } else {
        // Set the offset for the options variable
        if (req.query.offset !== undefined) {
          currentPage = req.query.offset;
          if (req.query.offset < 1) { // If the offset is less than 1
            res.redirect("/books?offset=1");
          } else if (req.query.offset > Math.ceil(totalBooks / 5)) { // If the offset is greater than the number of book divided by 5
            res.redirect(`/books?offset=${totalPaginationButtons - 1}`);
          } else { // If every thing is normal
            options.offset = (parseInt(req.query.offset) * 5) - 5;
          }
        }
      }
    }).then(() => {
      Book.findAll(options)
        .then(books => res.render("index", { books, paginationButtons, currentPage, booksCount, showPageInfo: true }))
        .catch(err => res.render("error", { err }));
    });
});

/*** New Book Routes ***/
router.get("/books/new", (req, res) => {
  res.render("books/new-book", { book: Book.build() });
});

router.post("/books/new", (req, res) => {
  // Post a new book to the database
  Book.create(req.body)
    .then(() => res.redirect("/"))
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.render("books/new-book", { book: Book.build(req.body), errors: err.errors });
      } else {
        throw err;
      }
    })
    .catch(err => res.render("error", { err }));
});

/*** Book Update Routes ***/
router.get("/books/:id", (req, res) => {
  Book.findByPk(req.params.id)
    .then(book => {
      if (book) {
        res.render("books/update-book", { book });
      } else {
        res.send(404);
      }
    })
    .catch(err => res.render("error", { err }));
});

router.post("/books/:id", (req, res) => {
  // Updates book info in the database
  const book = Book.build(req.body);
  book.id = req.params.id;

  Book.findByPk(req.params.id)
    .then(book => book.update(req.body))
    .then(() => res.redirect("/"))
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.render("books/update-book", { book, errors: err.errors });
      } else {
        throw err;
      }
    })
    .catch(err => res.render("error", { err }));
});

/*** Book Delete Route ***/
router.post("/books/:id/delete", (req, res) => {
  // Updates book info in the database
  Book.findByPk(req.params.id)
    .then(book => book.destroy())
    .then(() => res.redirect("/"))
    .catch(err => res.render("error", { err }));
});

module.exports = router;