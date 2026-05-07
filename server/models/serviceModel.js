const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    href: String,
    img: { type: String, required: true },
    alt: { type: String, required: true }
});

const Services = mongoose.model('Service', serviceSchema);

module.exports = Services;