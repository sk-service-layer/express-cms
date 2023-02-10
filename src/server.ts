import express, { Express, Request, Response,  } from "express";
import { connectToDatabase, db } from './db';
import postController from "./controllers/post/post-controller";
import * as dotenv from 'dotenv';

// Config
dotenv.config();
const app: Express = express();
const port: string = process.env.PORT ?? "3001";

// Routes
app.use(postController);

// DB 
connectToDatabase().then(async () => {
  console.log('connected to DB!');
  const collection = await db.collection('comments');
  const cursor = collection.find({}).limit(2);
  console.log("async");
  for await (const doc of cursor) {
    console.log(doc);
  }
  console.log('reached')
})

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my CMS app built with Express + Typescript");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
