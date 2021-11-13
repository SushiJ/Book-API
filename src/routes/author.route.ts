import { Express } from "express";
import {
  getAllAuthors,
  getAuthorById,
  getAuthorByBook,
} from "../controllers/author";

export const author = (app: Express) => {
  app.get("/", getAllAuthors);
  app.get("/:id", getAuthorById);
  app.get("/b/:book", getAuthorByBook);
};
