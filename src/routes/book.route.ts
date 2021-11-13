import { Express } from "express";
import { getAllBooks } from "src/controllers/book";

export const book = (app: Express) => {
  app.get("/", getAllBooks);
};
