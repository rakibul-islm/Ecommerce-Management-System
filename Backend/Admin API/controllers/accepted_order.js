const Accepted_order = require('../models/accepted_order');

exports.getAllAccepted_order = async (req, res, next) => {
  try {
    const [allAccepted_order] = await Accepted_order.fetchAll();
    res.status(200).json(allAccepted_order);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postAccepted_order = async (req, res, next) => {
  try {
    const postResponse = await Accepted_order.post(req.params.id);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



exports.deleteAccepted_order = async (req, res, next) => {
  try {
    const deleteResponse = await Accepted_order.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
