const { Schema, model } = require('mongoose');

const Wine = new Schema({
  name: String,
});

module.exports = model('Wine', Wine);
