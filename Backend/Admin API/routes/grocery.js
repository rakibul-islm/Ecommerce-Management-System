const express = require('express');

const groceryController = require('../controllers/grocery');

const router = express.Router();

router.get('/', groceryController.getAllGroceries);

router.post('/', groceryController.postGrocery);

router.put('/:id', groceryController.putGrocery);

router.delete('/:id', groceryController.deleteGrocery);

module.exports = router;
