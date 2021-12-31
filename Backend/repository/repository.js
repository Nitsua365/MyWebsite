const db = require('../mongoUtils').getDB();
const client = require('../mongoUtils').getClient();

  
const insertItemToDB = () => {
  client.collection('initial').insert('initial', JSON.stringify(document));
}
