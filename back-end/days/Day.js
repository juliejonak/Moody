const mongoose = require("mongoose");

const TAGS = ["Travel", "Work", "Sick", "Date"];

const Day = new mongoose.Schema({
  key: { type: Number, required: true, unique: true },
  date: {
    type: Date,
    default: Date.now,
  },
  mood: { type: Number },
  stress: { type: Number },
  energy: { type: Number },
  sleep: { type: Number },
  water: { type: Number },
  alcohol: { type: Number },
  caffeine: { type: Number },
  food: { type: Number },
  tags: { type: String, enum: TAGS },
});

module.exports = mongoose.model("Day", Day);
