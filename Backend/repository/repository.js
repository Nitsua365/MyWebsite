const db = require('../mongoUtils').getDB();
const client = require('../mongoUtils').getClient();

  
const insertItemToDB = async (document) => {
  const collection = db.collection('initial');

  console.log(document);

  const result = await collection.insertOne(document);

  // console.log(result);
}

module.exports = { insertItemToDB }
