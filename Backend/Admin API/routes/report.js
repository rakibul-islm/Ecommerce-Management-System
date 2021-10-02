const express = require('express');

const reportController = require('../controllers/report');

const router = express.Router();

router.get('/', reportController.getAllReport);

router.post('/:id', reportController.postReport);

router.delete('/:id', reportController.deleteReport);

module.exports = router;