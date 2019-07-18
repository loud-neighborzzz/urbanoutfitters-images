const mongoose = require('mongoose')
const mongoUri = 'mongodb://localhost/images';
// const mongoUri = 'mongodb://mongo:27017/images';
const db = mongoose.connect(mongoUri)

module.exports = db;