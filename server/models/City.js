const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: String
});

module.exports = mongoose.model('City', CitySchema);