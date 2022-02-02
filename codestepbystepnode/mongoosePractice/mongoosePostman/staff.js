
const mongoose = require('mongoose')

const staffSchema = mongoose.Schema({
  name:String,
  email:String,
  address:String
})

module.exports = mongoose.model('staff',staffSchema);