"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = __importDefault(require("./controllers/post-controller"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello, this is Express + TypeScript");
});
// Content Post logic
app.use('/post', post_controller_1.default);
// app.post("/post", (req, res) => {
//   res.send("Test complete!");
// });
// app.put("/post", (req, res) => {
//   res.send("Test complete!");
// });
// app.delete("/user", (req, res) => {
//   res.send("Got a DELETE request at /user");
// });
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
