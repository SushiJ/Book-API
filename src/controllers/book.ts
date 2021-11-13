import { Request, Response } from "express";
import { BookModel } from "src/models/book.model";

// Route    - /book
// Des      - To get all books
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
export const getAllBooks = async (_: Request, res: Response) => {
  const books = await BookModel.find();
  return res.json(books);
};

// Route    - /book/:ISBN
// Des      - To get books based on ISBN
// Access   - Public
// Method   - GET
// Params   - ISBN
// Body     - none
export const getBookByISBN = async (req: Request, res: Response) => {
  const { ISBN } = req.params;
  const book = await BookModel.findOne({ ISBN });
  return res.json(book);
};

// Route    - /book/c/:category
// Des      - To get books based upon category
// Access   - Public
// Method   - GET
// Params   - category
// Body     - none
exports.getBooksByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  const book = await BookModel.find().where(category);
  return res.json(book);
};

export const getBooksByAuthor = async (req: Request, res: Response) => {
  const { author } = req.params;
  const book = await BookModel.find().where(author);
  return res.json(book);
};
