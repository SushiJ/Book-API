import { Response, Express } from "express";
import { author } from "./routes/index";

function routes(app: Express) {
  app.get("/check", (_, res: Response) => {
    res.sendStatus(200);
  });

  //Author
  author(app);
}

export default routes;
