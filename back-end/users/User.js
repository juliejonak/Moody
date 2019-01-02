const mongoose = require("mongoose");

const User = new mongoose.Schema({
  key: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("User", User);
