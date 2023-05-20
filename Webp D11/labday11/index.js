import express from "express";
const app = express();

// localhost:4000/
app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(4000);