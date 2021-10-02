const express = require('express');

const orderController = require('../controllers/order');

const router = express.Router();

router.get('/', orderController.getAllOrder);



router.delete('/:id', orderController.deleteOrder);

module.exports = router;