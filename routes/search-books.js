const express = require("express");
const router = express.Router();

const Book = require("../models").Book;

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/books/search", (req, res) => {
  res.redirect("/books");
});

router.post("/books/search", (req, res) => {
  const query = req.body.query;

  if (query === "") {
    res.redirect("/");
  } else {
    const options = {
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { author: { [Op.like]: `%${query}%` } },
          { genre: { [Op.like]: `%${query}%` } },
          { year: { [Op.like]: `%${query}%` } }
        ]
      }
    };
  
    Book.findAll(options)
      .then(books => res.render("index", { books, paginationButtons: [] }))
      .catch(err => res.render("error", { err }));
  }
});

module.exports = router;