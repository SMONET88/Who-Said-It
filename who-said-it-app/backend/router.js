import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";

const router = express.Router();

const uri =
  "mongodb+srv://smonet88:B3P3cWsXKARBTdQ2@quote-cluster.tudq3ee.mongodb.net/?appName=Quote-Cluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//   addQuoteMongo({
//     quote: "I don’t get mad anymore, I just laugh",
//     speaker: "Phia",
//   });

// } catch (error) {
//   console.error(error);
// });

router.get("/:speaker", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("who-said-it-quotes");
    const collection = db.collection("quote-list");
    const query = { speaker: new RegExp(`^${req.params.speaker}$`, "i") };
    const results = await collection
      .find(query, { projection: { quote: 1, _id: 0 } })
      .toArray();

    res.status(200).send(results);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
});

router.post("/addQuote", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("who-said-it-quotes");
    const collection = db.collection("quote-list");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
    console.log(`Inserted quote with _id: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
});

export default router;
