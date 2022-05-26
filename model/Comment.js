const { Schema, model } = require("mongoose");

const Com = Schema({
  comment: {
    type: "string",
  },
});

const comment = model("comment", Com);

module.exports = comment;
