const { MongoClient } = require('mongodb');
const mongoKeys = require('./api-keys').mongoKeys;
const chalk = require('chalk');

var mongoClient;
var db;

module.exports = {
  initDB : async (port, uri) => {
    try {
      mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
      console.log(chalk.red("Connecting to MongoDB..."));
  
      await mongoClient.connect();
  
      console.log(chalk.red("MongoDB Client Connected..."));
      
      db = mongoClient.db(mongoKeys.mongodbName);
  
    } catch (e) {
      console.error(`Mongo client could not connect: ${e}`);
    }
  },

  getDB : () => {
    return db;
  },

  getClient : () => {
    return mongoClient;
  },

  printDBNames : async () => {
    const dbList = await mongoClient.db().admin().listDatabases();
    console.log(chalk.yellow('\nDatabases: '));
    dbList.databases.forEach( dbName => { console.log(chalk.yellow(` - ${dbName.name}`))});
    console.log();
  },

  printDBTables : () => {
    console.log(db.listCollections());
  },

  closeConnection : () => {
    mongoClient.close();
  }

}
