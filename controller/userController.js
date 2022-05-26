const userSchema = require("../model/user");
const catchAsync = require("../helper/catchAsync");
const AppError = require("../helper/errorHandler");

exports.createUser = catchAsync(async (req, res, next) => {
  const { email, image, name } = req.body;
  if (!email || !image || !name) {
    return next(new AppError("please provide email,image and name", 404));
  }
  const data = await userSchema.create(req.body);
  res.cookie("id", data._id);
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
  const user = await userSchema.findOne({ email: email });
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

exports.getOneUser = catchAsync(async (req, res, next) => {
  const { email } = req.params;
  if (!email) {
    return next(new AppError("please provide email", 404));
  }
  const data = await userSchema.findOne({ email: email });

  res.status(200).json({
    ok: true,
    message: "user found",
    data,
  });
});
