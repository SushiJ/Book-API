import mongoose, { model } from "mongoose";
import { Books } from "./book.model";

export interface Publisher extends Document {
  id: string;
  name: string;
  books: Books;
}

const PublisherSchema = new mongoose.Schema<Publisher>(
  {
    id: String,
    name: String,
    books: [String],
  },
  {
    timestamps: true,
  }
);

export const PublisherModel = model<Publisher>("Publishers", PublisherSchema);
