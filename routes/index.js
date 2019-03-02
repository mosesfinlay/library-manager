const express = require("express");
const router = express.Router();

/****************************
  Home Route
*****************************/

router.get("/", (req, res) => {
  res.redirect("/books");
});

module.exports = router;