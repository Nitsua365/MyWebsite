const express = require('express');
const chalk = require('chalk');
const app = express();
const mongoKeys = require('./api-keys').mongoKeys;
const mongoUtils = require('./mongoUtils');
const endpoints = require('./endpoints/endpoints');
const { ExplainVerbosity } = require('mongodb');


async function main() {
  const port = 8080;
  const uri = "mongodb+srv://" + mongoKeys.mongoUser + ":" + 
                              mongoKeys.mongoPass + 
                              "@" + mongoKeys.mongoClusterName + "/" + 
                              mongoKeys.mongodbName + 
                              "?retryWrites=true&w=majority";

  // initialize connection client and db
  await mongoUtils.initDB(uri);

  // print the database names
  await mongoUtils.printDBNames();
  // mongoUtils.printDBTables(mongoKeys.mongodbName);
  
  // include endpoints from other files here
  app.use(endpoints);

  // listen on port 8080
  app.listen(port, () => {
    console.log(chalk.hex("#00deff").bold(`Running on: http://localhost:${port}`));
  });

  // close mong connection on ctrl+c
  process.on('SIGINT', () => {
    mongoUtils.closeConnection();
    console.log(chalk.red('\nclosing MongoDB connection...'));
    process.exit();
  })
}


main();