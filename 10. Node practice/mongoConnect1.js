const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = 'mongodb://localhost:27017';
const mongoose = require('mongoose')
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('Product_DB');
    const products = database.collection('Products');

    // Query for a movie that has the title 'Back to the Future'
    const productResult = await products.findOne({});

    console.log(productResult);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);