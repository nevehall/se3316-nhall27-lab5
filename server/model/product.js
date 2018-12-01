const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create a Schema
const postSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  tax: { type: Number, required: true },
  quantity:  { type: Number, required: false },
  description: { type: String, required: false },
  purchased: { type: Number, required: false },
  url: { type: String, required: false }
}, { collection : 'product' });
 
const Product = mongoose.model('Product', postSchema);
module.exports = Product;