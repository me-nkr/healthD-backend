const { Schema, model } = require("mongoose");

const Com = Schema({
  comment: {
    type: "string",
  },
});

const comment = model("Comment", Com);

module.exports = comment;
