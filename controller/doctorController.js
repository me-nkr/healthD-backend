const catchAsync = require("../helper/catchAsync");
const AppError = require("../helper/errorHandler");
const doc = require("../model/doctor");

exports.createUser = catchAsync(async (req, res, next) => {
  const { email, image, name } = req.body;
  if (!email || !image || !name) {
    return next(new AppError("please provide email,image and name", 404));
  }
  const data = await doc.create(req.body);
  res.status(200).json({
    ok: true,
    message: "user was created",
    data,
  });
});

exports.getUserInfo = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new AppError("email not found or unAUthorized", 401));
  }
  const user = await doc.findOne({ email: email });
  if (!user) {
    return next(new AppError("user not found", 404));
  }
  res.status(201).json({
    ok: true,
    message: "request was succesfull",
    data: user,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new AppError("email not found or unAUthorized", 401));
  }
  await userSchema.deleteOne({ email: email });
  res.status(201).json({
    ok: true,
    message: "account was deleted",
  });
});
