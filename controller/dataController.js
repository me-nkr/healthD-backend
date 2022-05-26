const dataPat = require("../model/data");
const catchAsync = require("../helper/catchAsync");
const AppError = require("../helper/appError");
const doc = require("../model/doc");
const user = require("../model/user");

exports.createData = catchAsync(async (req, res, next) => {
  const { patient, title, description } = req.body;
  const doctor = await doc.findOne({ email: email });
  if (!doctor || !doctor.doctor) {
    return next(new AppError("not authorized", 401));
  }
  const us = user.findOne({ email: patient });
  const response = new dataPat({ title, description });
  us.history.push(response);
  await us.save();

  res.status(200).json({
    ok: true,
    message: "data was saved",
  });
});
