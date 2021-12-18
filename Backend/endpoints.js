const service = require('./service');
const express = require('express');

module.exports = function(app) {

  app.use(express.json());

  app.post('/home', (req, res) => {
    // service.insertItem(req.body);
    res.send(req.body);
  })

}


