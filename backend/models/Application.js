const mongoose = require('mongoose')
const AppSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  cvPath: String,
  originalName: String,
  createdAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Application', AppSchema)
