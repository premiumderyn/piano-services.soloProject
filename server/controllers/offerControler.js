const Offer = require('../models/offerModel');

exports.getAllOffers = async (req, res) => {
    try {
        const offers = await Offer.find();
        
        res.status(200).json({
            status: 'success',
            results: offers.length,
            data: {
                offers
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};