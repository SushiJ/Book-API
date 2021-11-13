import { Request, Response } from "express";
import { AuthorModel } from "../models/author.model";

// Route    - /authors
// Des      - To get authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
export const getAllAuthors = async (_: Request, res: Response) => {
  const authors = await AuthorModel.find();
  return res.json(authors);
};

// Route    - /authors
// Des      - To get authors based on ID
// Access   - Public
// Method   - GET
// Params   - ID
// Body     - none
export const getAuthorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const a_id = parseInt(id);

  const getAuthors = await AuthorModel.findById(a_id);
  return res.json({ Authors: getAuthors });
};

// Route    - /authors/b/:book
// Des      - To get authors based on a book
// Access   - Public
// Method   - GET
// Params   - book
// Body     - none
export const getAuthorByBook = async (req: Request, res: Response) => {
  const { book } = req.params;
  const findAuthor = await AuthorModel.findOne({
    books: book,
  });
  return res.json(findAuthor);
};
