const express = require('express');

const accepted_orderController = require('../controllers/accepted_order');

const router = express.Router();

router.get('/', accepted_orderController.getAllAccepted_order);

router.post('/:id', accepted_orderController.postAccepted_order);

router.delete('/:id', accepted_orderController.deleteAccepted_order);

module.exports = router;