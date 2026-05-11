const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  salePrice: { type: String, required: true },
  rentPrice: { type: String, required: true },
  features: [{ type: String, required: true }]
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;