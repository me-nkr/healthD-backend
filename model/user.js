const { Schema, model } = require("mongoose");

const userSchema = Schema({
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
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "data",
    },
  ],
});

const User = model("user", userSchema);

module.exports = User;
