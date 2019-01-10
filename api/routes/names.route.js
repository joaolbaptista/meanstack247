const express = require('express');
const app = express();
const namesRoutes = express.Router();

let Names = require('../models/Names');

//add name into the mongoDB collection
namesRoutes.route('/add').post(function (req, res) {
  let name = new Names(req.body);
  name.save()
    .then(name => {
      res.status(200).json('Name successfully added!');
    })
    .catch(err => {
      res.status(400).send('Oops.. something went wrong!')
    });
});

// get data route
// add filter data 
namesRoutes.route('/').get(function (req, res) {
  Names.find({
      "personName": {
        "$regex": req.query.filter != 'undefined' ? `${req.query.filter}` : '',
        "$options": "i"
      }
    },
    function (err, names) {
      if (err) {
        console.log(err);
      } else {
        res.json(names);
      }
    });
});

module.exports = namesRoutes;
