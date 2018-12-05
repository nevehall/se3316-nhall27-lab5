const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create a Schema
const reviewSchema = new Schema({
  //id: {_id},
  name: { type: String, required: true, max: 100 },
  comment: { type: String, required: true },
  rating: { type: Number, required: true }
}, { collection : 'reviews' });
 
const Reviews = mongoose.model('Reviews', reviewSchema);
module.exports = Reviews;