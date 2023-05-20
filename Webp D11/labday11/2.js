import express from "express";
import { readAllTodo, insertTodo } from "./2main.js";

const app = express();

// localhost:4000/
app.get("/", async (req, res) => {
  let list = await readAllTodo();
  res.json(list);
});

// localhost:4000/addtodo
app.get("/addtodo", async (req, res) => {
  await insertTodo({ message: "via api" });
  res.json({ message: "Success" });
});

app.listen(5000);