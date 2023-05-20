import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("Dac_College");
    const stud = database.collection("Dac_Student");

    const filter = { name: "Monika" };

    const options = { upsert: true };

    const updateDoc = {
      $set: {
        batch: `Student, such as: ${Math.random()}`
      },
    };

    const result = await stud.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
