import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";

async function insertTodo(data) {
  const client = new MongoClient(uri);

  const db = client.db("Dac_College");
  let result = await db.collection("Dac_Student").insertOne(data);

  await client.close();
}

async function readAllTodo() {
  const client = new MongoClient(uri);

  const db = client.db("Dac_College");
  const todo_collection = db.collection("Dac_Student");

  let list = await todo_collection.find().toArray();
  await client.close();

  return list;
}

export { insertTodo, readAllTodo };