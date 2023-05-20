import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("Dac_College");
    const name = database.collection("Dac_Student");

    const query = { message: "Monika" };

    const names = await name.findOne(query);

    console.log(names);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
