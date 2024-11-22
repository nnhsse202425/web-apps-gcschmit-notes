"use strict"; // enable modern Javascript modifications

/**********************************************************
 * MongoDB
 **********************************************************/

const { MongoClient } = require("mongodb");

// load environment variables from .env file into process.env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    await client.connect();

    // obtain references to a database and one of its collections
    const db = client.db("sample_guides");
    const coll = db.collection("planets");

    // find, without arguments, will return a cursor (i.e., iterator)
    //  to all documents in the collection
    let cursor = coll.find();
    console.log("all planets");
    await printAll(cursor);

    // if you want all the elements referenced by the cursor as an array,
    //  use the toArray function
    cursor = coll.find();
    const planets = await cursor.toArray();
    console.log("all planets as an array");
    console.log(planets);

    // find with a query object will return a cursor to all documents
    //  that match the query
    cursor = coll.find({ hasRings: true });
    console.log("planets with rings:");
    await printAll(cursor);

    // there can be multiple properties in the query object and all must
    //  match (i.e., and)
    cursor = coll.find({ hasRings: false, mainAtmosphere: "Ar" });
    console.log("planets without rings with Argon in the atmosphere:");
    await printAll(cursor);

    // operators can be specified (e.g., $lt, $gt, $lte, $gte, $ne, $in, $nin)
    cursor = coll.find({ "surfaceTemperatureC.mean": { $lt: 15 } });
    console.log("planets with average surface temperature less than 15 C:");
    await printAll(cursor);
  } finally {
    // ensure that the client will close when we finish or error
    await client.close();
  }
}

run().catch(console.dir);

async function printAll(cursor) {
  // the methods on a cursor are similar to those on Java iterators
  while (await cursor.hasNext()) {
    console.log(await cursor.next());
  }
}
