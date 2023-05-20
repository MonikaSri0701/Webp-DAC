import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  

  const db = client.db("College");
  let result = await db.collection("Student").insertOne({});

  await client.close();
}

main();