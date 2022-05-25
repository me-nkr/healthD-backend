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
});

const Doctor = model("doctor", doctorSchema);

module.exports = Doctor;
