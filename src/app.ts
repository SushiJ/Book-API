import express, { urlencoded } from "express";
import logger from "./utils/logger";
import routes from "./routes";
import connect from "./utils/connect";
import config from "config";
const app = express();

const PORT = config.get<number>("port");

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.listen(PORT, () => {
  connect();
  logger.info(`Sever Started at http://localhost:${PORT}`);
  routes(app);
});
