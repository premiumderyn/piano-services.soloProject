const express = require('express');
const pianoServiceController = require('../controllers/pianoServiceController');

const router = express.Router();

router.route('/')
  .get(pianoServiceController.getAllServices)
//   .post(pianoServiceController.createService);

// router.route('/:id')
//   .get(pianoServiceController.getServiceById)
//   .delete(pianoServiceController.deleteService);

module.exports = router;