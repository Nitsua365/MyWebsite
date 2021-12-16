const express = require('express');
const chalk = require('chalk');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/home', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


// listen on port 8080
app.listen(port, () => {
  console.log(chalk.hex("#006eff")("Running on: http://localhost:" + port));
})