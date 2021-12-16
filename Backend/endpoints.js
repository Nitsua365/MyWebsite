const express = require('express');
const chalk = require('chalk');
const app = express();
const port = 8080;
const apikeys = require('./api-keys')
const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://" + 
            apikeys.mongoKeys.mongoUser + 
            ":<" + apikeys.mongoKeys.mongoPass + ">@" + 
            apikeys.mongoKeys.mongoPass + "/" + 
            apikeys.mongoKeys.mongodbName + 
            "?retryWrites=true&w=majority";

const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

mongoClient.connect(err => {
  const collection = mongoClient.db(apikeys.mongoKeys.mongodbName).collection("devices");
  console.log(collection.collectionName);
  mongoClient.close();
});

app.use(express.json());

app.post('/home', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// listen on port 8080
app.listen(port, () => {
  console.log(chalk.hex("#006eff")("Running on: http://localhost:" + port));
})