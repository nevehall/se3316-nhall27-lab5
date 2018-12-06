const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create a Schema
const dcmaPolicySchema = new Schema({
  info : {type: String}
}, { collection : 'dcmaPolicy' });
 
const DcmaPolicy = mongoose.model('DcmaPolicy', dcmaPolicySchema);
module.exports = DcmaPolicy;