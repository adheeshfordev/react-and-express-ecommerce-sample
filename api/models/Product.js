const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  platform: { type: String, required: true },
  imageUrl: { type: String, required: true },
  developer: { type: String, required: true },
  publisher: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
},
 {
  collection: 'Product'
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product