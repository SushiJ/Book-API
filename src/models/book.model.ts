import mongoose, { Document, model } from "mongoose";
import { Authors } from "./author.model";

export interface Book extends Document {
  ISBN: string;
  title: string;
  authors: Authors;
  language: string;
  publications: number;
  numOfPages: number;
  categories: [string];
  pubDate: string;
}
export type Books = Book[];

const Book = new mongoose.Schema<Book>(
  {
    ISBN: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: [Number],
    },
    language: String,
    pubDate: String,
    numOfPages: Number,
    categories: [String],
    publications: Number,
  },
  { timestamps: true }
);

//create a book model
export const BookModel = model<Book>("books", Book);
