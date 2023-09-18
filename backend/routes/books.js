const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
} = require("../controllers/bookController");

const router = express.Router();

// GET all books
router.get("/", getBooks);

// GET a single book
router.get("/:id", getBook);

// POST a new book
router.post("/", createBook);

// DELETE a book
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a book" });
});

// UPDATE a book
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a book" });
});

module.exports = router;
