const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  manager: { type: Boolean, required: false }
  
}, { collection : 'user' });
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;