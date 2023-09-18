const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

// GET all books
router.get("/", (req, res) => {
  res.json({ message: "GET all books" });
});

// GET a single book
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single book" });
});

// POST a new book
router.post("/", async (req, res) => {
  const { title, author, description, rating } = req.body;

  try {
    const book = await Book.create({ title, author, description, rating });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a new book
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a book" });
});

// UPDATE a new book
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a book" });
});

module.exports = router;
