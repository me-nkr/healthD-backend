const { Schema, model } = require("mongoose");

const dooctorRemarks = Schema({
  title: {
    type: String,
    required: [true, "document should have a title"],
  },
  description: {
    type: String,
    required: [
      true,
      "document should have a description about patient disease",
    ],
    data: {
      type: Date,
      default: Date.now,
    },
    doctor: {
      type: String,
      required: [true, "data should have a doctor"],
    },
  },
});

const remarksData = model("data", dooctorRemarks);
module.exports = remarksData;
