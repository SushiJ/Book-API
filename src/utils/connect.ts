import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

export default async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    mongoose.connect(dbUri);
    logger.info("Database connected");
  } catch (error) {
    logger.error("Database connection failed");
    process.exit(1);
  }
}
