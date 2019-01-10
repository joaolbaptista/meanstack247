const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Names = new Schema({
  personName: {
    type: String
  }
}, {
  versionKey: false 
}, {
  collection: 'names'
});

module.exports = mongoose.model('Names', Names);
