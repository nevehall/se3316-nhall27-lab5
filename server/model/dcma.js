const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create a Schema
const dcmaSchema = new Schema({
  manEmail: { type: String, required: false },
  cusEmail: { type: String, required: false },
  about: { type: String, required: false },
  comment:  { type: String, required: false }
}, { collection : 'DCMA' });
 
const DCMA = mongoose.model('DCMA', dcmaSchema);
module.exports = DCMA;