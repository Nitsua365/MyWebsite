const express = require('express');
const chalk = require('chalk');
const app = express();
const mongoKeys = require('./api-keys').mongoKeys;
const mongoUtils = require('./mongoUtils');
const routes = require('./endpoints/endpoints')(app);

async function main() {
  const port = 8080;
  const uri = "mongodb+srv://" + mongoKeys.mongoUser + ":" + 
                              mongoKeys.mongoPass + 
                              "@" + mongoKeys.mongoClusterName + "/" + 
                              mongoKeys.mongodbName + 
                              "?retryWrites=true&w=majority";

  // initialize connection client and db
  await mongoUtils.initDB(port, uri);

  // print the database names
  await mongoUtils.printDBNames();
  // mongoUtils.printDBTables(mongoKeys.mongodbName);
  
  // listen on port 8080
  app.listen(port, () => {
    console.log(chalk.hex("#00deff").bold(`Running on: http://localhost:${port}`));
  });

  // mongoUtils.closeConnection();
}


main();