const mongoose = require('mongoose')
const db = require('./index.js')

const imageSchema = new mongoose.Schema({
  itemId: Number,
  color: String,
  url: String
})

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;