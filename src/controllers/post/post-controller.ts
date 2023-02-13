import express, { Router, Request, Response } from "express";
import * as postService from "./service";
import { Post } from "./types";

const router: Router = express.Router();

router.get("/posts", async (req: Request, res: Response) => {
  try {
    const posts = await postService.getPosts();
    res.send(posts);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

router.get("/posts/:licencePlate", async (req: Request, res: Response) => {
  try {
    const licencePlate = req.params.licencePlate;
    const posts = await postService.getPostByLicencePlate(licencePlate);
    res.send(posts);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

// Under Construction
router.get("/userPosts", async (req: Request, res: Response) => {
  try {
    const username = req.body.username;
    const posts = await postService.getPostByUsername(username);
    res.send(posts);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

router.post("/post", async (req: Request, res: Response) => {
  try {
    const post: Post = await req.body;
    await postService.createPost(post);
    res.sendStatus(201);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

router.delete("/post", async (req: Request, res: Response) => {
  try {
    const id = await req.body.id;
    const result = await postService.deletePost(id);
    result ? res.sendStatus(200) : res.sendStatus(409);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

export default router;
