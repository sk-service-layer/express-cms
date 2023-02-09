import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
const db: number[] = [];

router.get('/post', async (req: Request, res: Response) => {
  try {
    res.send("OK");
    res.status(200);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

router.post('/post', async (req: Request, res: Response) => {
  console.log('reached!!!!');
  try {
    db.push(Math.random()*10);
    res.send(`db: ${db} posted!`)
    res.status(201);
  } catch (e: any) {
    res.status(500).send(e.toString());
  }
});

export default router;
