const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create a Schema
const postSchema = new Schema({
  //id: {_id},
  name: { type: String, required: false, max: 100 },
  price: { type: Number, required: false },
  tax: { type: Number, required: false },
  quantity:  { type: Number, required: false },
  descript: { type: String, required: false },
  purchased: { type: Number, required: false }
}, { collection : 'product' });
 
const Product = mongoose.model('Product', postSchema);
module.exports = Product;