const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create a Schema
const cartSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: false },
  tax: { type: Number, required: false },
  quantity:  { type: Number, required: false },
  description: { type: String, required: false },
  purchased: { type: Number, required: false }
}, { collection : 'cart' });
 
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;