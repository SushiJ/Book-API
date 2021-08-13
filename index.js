const express = require("express");

const { Book, Authors, Publishers } = require("./database");

const app = express();

// Route    - /book
// Des      - To get all books
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
app.get("/book", (req, res) => {
  res.json({ books: Book });
});

// Route    - /book/:ISBN
// Des      - To get books based on ISBN
// Access   - Public
// Method   - GET
// Params   - ISBN
// Body     - none
app.get("/book/:ISBN", (req, res) => {
  const getBook = Book.filter((book) => book.ISBN === req.params.ISBN);
  return res.json({ books: getBook });
});

// Route    - /book/c/:category
// Des      - To get books based upon category
// Access   - Public
// Method   - GET
// Params   - category
// Body     - none
app.get("/book/c/:category", (req, res) => {
  const getBook = Book.filter((book) =>
    book.category.includes(req.params.category)
  );
  return res.json({ books: getBook });
});

// Route    - /authors
// Des      - To get authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
app.get("/authors", (req, res) => {
  return res.json({ Authors: Authors });
});

// Route    - /authors
// Des      - To get authors based on ID
// Access   - Public
// Method   - GET
// Params   - ID
// Body     - none
app.get("/authors/:id", (req, res) => {
  const getAuthors = Authors.filter(
    (author) => author.id.toString() === req.params.id
  );
  return res.json({ Authors: getAuthors });
});

// Route    - /authors/b/:book
// Des      - To get authors based on a book
// Access   - Public
// Method   - GET
// Params   - book
// Body     - none
app.get("/authors/b/:book", (req, res) => {
  const getAuthors = Authors.filter((author) =>
    author.books.includes(req.params.book)
  );
  return res.json({ Authors: getAuthors });
});

// Route    - /publishers
// Des      - To get publishers
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
app.get("/publishers", (req, res) => {
  res.json({ publishers: Publishers });
});

// Route    - /publishers/:id
// Des      - To get publishers based on ID
// Access   - Public
// Method   - GET
// Params   - ID
// Body     - none
app.get("/publishers/:id", (req, res) => {
  const getPublications = Publishers.filter(
    (publisher) => publisher.id === parseInt(req.params.id)
  );
  return res.json({ publishers: getPublications });
});

// Route    - /publishers/b/:book
// Des      - To get publishers for a specific book
// Access   - Public
// Method   - GET
// Params   - book
// Body     - none
app.get("/publishers/b/:book", (req, res) => {
  const getPublications = Publishers.filter((publisher) =>
    publisher.books.includes(req.params.book)
  );
  return res.json({ publishers: getPublications });
});
app.listen(4000, () => console.log("Server running"));
