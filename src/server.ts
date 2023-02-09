import express, { Express, Request, Response } from "express";
import postController from './controllers/post/post-controller';

const app: Express = express();
const port = 3000;

app.use(postController);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my CMS app built with Express + Typescript");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
