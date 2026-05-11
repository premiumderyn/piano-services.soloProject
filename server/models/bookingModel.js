const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'] 
  },
  service: { 
    type: String, 
    required: [true, 'Service selection is required'] 
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Booking', bookingSchema);