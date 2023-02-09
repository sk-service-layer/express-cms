"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const db = [];
// router.post("/post", async (req: Request, res: Response) => {
//   console.log("reached!!!!");
//   try {
//     console.log('reached part 2')
//     db.push(Math.random() * 10);
//     res.send(`db: ${db} posted!`);
//     res.status(201);
//   } catch (e: any) {
//     res.status(500).send(e.toString());
//   }
// });
exports.default = router;
