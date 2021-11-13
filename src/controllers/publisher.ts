// const { Publishers } = require("../database");

import { Request, Response } from "express";
import { PublisherModel } from "src/models/publisher.model";

// Route    - /publishers
// Des      - To get publishers
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
export const getPublishers = async (_: Request, res: Response) => {
  const allPublishers = await PublisherModel.find();

  return res.json({ publishers: allPublishers });
};

// Route    - /publishers/:id
// Des      - To get publishers based on ID
// Access   - Public
// Method   - GET
// Params   - ID
// Body     - none
exports.getPublishersById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const publishersById = await PublisherModel.findById(id);
  return res.json({ publishers: publishersById });
};

// Route    - /publishers/b/:book
// Des      - To get publishers for a specific book
// Access   - Public
// Method   - GET
// Params   - book
// Body     - none
exports.getPublishersByBook = async (req: Request, res: Response) => {
  const { book } = req.params;
  const publishersByBook = await PublisherModel.find().where(book);
  return res.json({ publishers: publishersByBook });
};
