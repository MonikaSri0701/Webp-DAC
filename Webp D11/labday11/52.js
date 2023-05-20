import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("Dac_College");
    const stud = database.collection("Dac_Student");

    const query = { message: "first todo" };

    const result = await stud.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
