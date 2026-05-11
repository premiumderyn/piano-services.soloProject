const express = require('express');
const bookingController = require('../controllers/bookingController');
const router = express.Router();

// Викликаємо оновлений метод createBooking
router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);

module.exports = router;