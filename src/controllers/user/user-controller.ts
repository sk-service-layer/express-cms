import express, { Router, Request, Response } from "express";
import * as userService from "./service";
import { User } from "./types";

const router: Router = express.Router();

router.get("/signUp", async (req: Request, res: Response) => {
  try {
    const credentials: User = req.body;
    const user = await userService.signUp(credentials);
    res.send(user);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

export default router;