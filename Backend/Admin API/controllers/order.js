const Order = require('../models/order');

exports.getAllOrder = async (req, res, next) => {
  try {
    const [allOrders] = await Order.fetchAll();
    res.status(200).json(allOrders);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



exports.deleteOrder = async (req, res, next) => {
  try {
    const deleteResponse = await Order.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
