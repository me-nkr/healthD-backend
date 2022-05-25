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
  },
});

const remarksData = model("data", dooctorRemarks);
module.exports = remarksData;
