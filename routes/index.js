const express = require("express");
const router = express.Router();

const Book = require("../models").Book;

/****************************
  Home Route
*****************************/

router.get("/", (req, res) => {
  res.redirect("/books");
});

/****************************
  Book Routes
*****************************/

router.get("/books", (req, res) => {
  Book.findAll({ order: [["createdAt", "DESC"]] })
    .then(books => res.render("index", { books }))
    .catch(err => res.render("error", { err }));
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