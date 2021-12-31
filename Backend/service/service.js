const repo = require('../repository/repository');

function insertItem(body) {
  console.log(body);

  repo.insertItemToDB(body);

}

module.exports = { insertItem }