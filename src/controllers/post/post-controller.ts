import express, { Router, Request, Response } from "express";
import * as postService from "./service";

const router: Router = express.Router();

router.get("/posts", async (req: Request, res: Response) => {
  try {
    const posts = await postService.getPosts();
    res.send(posts);
    res.status(200);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

router.post("/post", async (req: Request, res: Response) => {
  try {
    res.status(201);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

export default router;
