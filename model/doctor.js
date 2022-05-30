const { Schema, model } = require("mongoose");

const doctorSchema = Schema({
  name: {
    type: String,
    required: [true, "user should have a name"],
  },
  email: {
    type: String,
    required: [true, "user should have a email"],
  },
  Image: {
    type: String,
  },
  doctor: {
    type: Boolean,
    default: true,
  },
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Doctor = model("doctor", doctorSchema);

module.exports = Doctor;
