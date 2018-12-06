const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create a Schema
const reviewSchema = new Schema({
  name: { type: String, required: true},
  comment: { type: String, required: false },
  rating: { type: Number, required: false }
}, { collection : 'reviews' });
 
const Reviews = mongoose.model('Reviews', reviewSchema);
module.exports = Reviews;