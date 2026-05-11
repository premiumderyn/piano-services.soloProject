const express = require('express');
const offerController = require('../controllers/offerControler');
const router = express.Router();

router.route('/')
  .get(offerController.getAllOffers);
//   .post(pianoServiceController.createService);

// router.route('/:id')
//   .get(pianoServiceController.getServiceById)
//   .delete(pianoServiceController.deleteService);

module.exports = router;