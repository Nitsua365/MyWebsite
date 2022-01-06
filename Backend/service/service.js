const repo = require('../repository/repository');

async function insertItem(body) {
  // console.log(body);

  await repo.insertItemToDB(body);

}

module.exports = { insertItem }