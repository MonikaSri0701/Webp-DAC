import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// http://localhost:4000/
app.get("/", function (req, res) {
  res.json({});
});

// GET
// GET ME ALL THE USERs
// http://localhost:4000/users
app.get("/users", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("Dac_College");
  let list = await db.collection("Dac_Student").find().toArray();

  await client.close();

  res.json(list);
});

// GET
// GET ME USER WHER ID IS PARAM
app.get("/users/:id", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("Dac_College");

  let id = new ObjectId(req.params.id);
  let user = await db.collection("Dac_Student").findOne({ _id: id });

  await client.close();

  res.json(user);
});

app.get("/users/query_by_name/:name", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("Dac_College");
  let user = await db
    .collection("Dac_Student")
    .findOne({ name: req.params.name });

  await client.close();

  res.json(user);
});

// POST
// Create New User
// http://localhost:4000/user
app.post("/user/", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let userDocument = req.body;

  const db = client.db("Dac_College");
  await db.collection("Dac_Student").insertOne(userDocument);

  await client.close();

  res.json({ opr: true });
});

// DELETE
// DELETE ONE USER
// http://localhost:4000/user/646866fe5d8996044b96ce6c
app.delete("/user/:id", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("Dac_College");
  let id = new ObjectId(req.params.id);
  await db.collection("Dac_Student").deleteOne({ _id: id });

  await client.close();

  res.json({ opr: true });
});

app.listen(4000);