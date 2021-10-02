const Report = require('../models/report');

exports.getAllReport = async (req, res, next) => {
  try {
    const [allReport] = await Report.fetchAll();
    res.status(200).json(allReport);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postReport = async (req, res, next) => {
  try {
    const postResponse = await Report.post(req.params.id);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



exports.deleteReport = async (req, res, next) => {
  try {
    const deleteResponse = await Report.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
