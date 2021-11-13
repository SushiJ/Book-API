import { Schema, model, Document } from "mongoose";

export interface Author extends Document {
  id: number;
  name: string;
  books: string[];
}

export type Authors = Author[];

//create author schema
const AuthorSchema = new Schema<Author>(
  {
    id: Number,
    name: String,
    books: [String],
  },
  { timestamps: true }
);

//create a author model
export const AuthorModel = model<Author>("authors", AuthorSchema);
