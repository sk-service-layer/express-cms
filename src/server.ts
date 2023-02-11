import express, { Express, Request, Response } from "express";
import { connectToDatabase, db } from "./db";
import postController from "./controllers/post/post-controller";
import * as dotenv from "dotenv";

// Config
dotenv.config();
const app: Express = express();
const port: string = process.env.PORT ?? "3001";
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Certain routes are encapsulated in DB config bc.
// routes would not work without stable connection 

// DB
connectToDatabase().then(async () => {
  console.log("connected to DB!");
  // Routes
  app.use(postController);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my CMS app built with Express + Typescript");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
