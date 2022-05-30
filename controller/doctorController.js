const catchAsync = require("../helper/catchAsync");
const AppError = require("../helper/errorHandler");
const doc = require("../model/doctor");
const Com = require("../model/Comment");

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
  const user = await doc.findOne({ email: email }).populate("comments");
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
  await doc.deleteOne({ email: email });
  res.status(201).json({
    ok: true,
    message: "account was deleted",
  });
});

exports.createComment = catchAsync(async (req, res, next) => {
  const { comment } = req.body;
  if (!comment) {
    return next("comment not found", 404);
  }
  const { email } = req.params;
  if (!email) {
    return next("no id was provided", 404);
  }
  const user = await doc.findOne({ email: email });
  const newComment = new Com({ comment: comment });
  user.comments.push(newComment);
  await user.save();
  res.status(200).json({
    ok: true,
    messsage: "comment was added",
  });
});

//just a function to delete all the data will remove after dev phase
const deletALL = catchAsync(async (req, res, next) => {
  await doc.deleteMany();
});

exports.getAllDocs = catchAsync(async (req, res, next) => {
  const rs = await doc.find();
  res.status(201).json({
    ok: true,
    data: rs,
    message: "query was performed",
  });
});
