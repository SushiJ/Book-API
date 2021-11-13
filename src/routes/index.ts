import { Express } from "express";
import {
  getAuthor,
  getAuthorBybook,
  getAuthorById,
} from "../controllers/author";

export const author = (app: Express) => {
  app.get("/", getAuthor);
  app.get("/:id", getAuthorById);
  app.get("/b/:book", getAuthorBybook);
};

export default author;
