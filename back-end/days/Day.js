const mongoose = require("mongoose");

const Day = new mongoose.Schema({
  key: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("Day", Day);
