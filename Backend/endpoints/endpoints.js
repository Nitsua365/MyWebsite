const service = require('../service/service');
const express = require('express');
const router = express.Router();

router.use(express.json());

router.route('/home')
  .post((req, res) => {
    service.insertItem(req.body);
    res.send(req.body);
  })
  .get((req, res) => {
    res.send('get on /home');
  });



module.exports = router;


