const Grocery = require('../models/grocery');

exports.getAllGroceries = async (req, res, next) => {
  try {
    const [allGroceries] = await Grocery.fetchAll();
    res.status(200).json(allGroceries);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postGrocery = async (req, res, next) => {
  try {
    const postResponse = await Grocery.post(req.body.title, req.body.image, req.body.images, req.body.description, req.body.price, req.body.quantity, req.body.short_desc, req.body.cat_id);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putGrocery = async (req, res, next) => {
  try {
    const putResponse = await Grocery.update(req.body.title, req.body.image, req.body.images, req.body.description, req.body.price, req.body.quantity, req.body.short_desc, req.body.cat_id, req.params.id);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteGrocery = async (req, res, next) => {
  try {
    const deleteResponse = await Grocery.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
