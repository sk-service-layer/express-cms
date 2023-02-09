"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = __importDefault(require("./controllers/post/post-controller"));
const post_controller_tes_1 = __importDefault(require("./controllers/post/post-controller-tes"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello, this is Express + TypeScript");
});
app.post("/", (req, res) => {
    res.send('successfully posted!');
});
// Content Post logic
app.use(post_controller_1.default);
app.use(post_controller_tes_1.default);
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
