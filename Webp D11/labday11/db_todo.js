import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function insertTodo(data) {
  const db = client.db("College");
  let result = await db.collection("Stuent").insertOne(data);

  await client.close();
}

async function readAllTodo() {
  const db = client.db("College");
  const todo_collection = db.collection("Student");

  let list = await todo_collection.find().toArray();
  await client.close();

  return list;
}

export { insertTodo, readAllTodo };