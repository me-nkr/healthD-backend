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
});

const User = model("user", userSchema);

module.exports = User;
