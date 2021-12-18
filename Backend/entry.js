const express = require('express');
const chalk = require('chalk');
const app = express();
const apikeys = require('./api-keys')
const { MongoClient } = require('mongodb')
const routes = require('./endpoints')(app)
var mongoClient;
var db;

async function main() {
  const port = 8080;
  const uri = "mongodb+srv://" + apikeys.mongoKeys.mongoUser + ":" + 
                              apikeys.mongoKeys.mongoPass + 
                              "@" + apikeys.mongoKeys.mongoClusterName + "/" + 
                              apikeys.mongoKeys.mongodbName + 
                              "?retryWrites=true&w=majority";

  db = await initDB(port, uri);

  // listen on port 8080
  app.listen(port, () => {
    console.log(chalk.hex("#006eff").bold(`Running on: http://localhost:${port}`));
  });

}

async function initDB(port, uri) {
  try {
    mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log(chalk.red("Connecting to MongoDB..."));

    await mongoClient.connect();

    console.log(chalk.red("MongoDB Client Connected..."));
    
    return mongoClient.db(apikeys.mongoKeys.mongodbName);

  } catch (e) {
    console.error(`Mongo client could not connect: ${e}`);
  }
}

main();

module.exports = { db, app }