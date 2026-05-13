const Booking = require('../models/bookingModel');

exports.createBooking = async (req, res) => {
    try {
        const newBooking = await Booking.create(req.body);
        
        res.status(201).json({
            status: 'success',
            data: {
                booking: newBooking
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().sort('-createdAt');
        res.status(200).json({
            status: 'success',
            results: bookings.length,
            data: { bookings }
        });
    } catch (err) {
        res.status(500).json({ status: 'fail', message: err.message });
    }
};