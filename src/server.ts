import express, { Express, Request, Response } from "express";
import postController from './controllers/post-controller';

const app: Express = express();
const port = 3000;


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

// Content Post logic

app.use('/post', postController);


app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
