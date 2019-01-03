const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const TAGS = ["Travel", "Work", "Sick", "Date"];

const Day = new mongoose.Schema({
  user_key: { type: Number },
  user: { type: ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now,
  },
  happiness: Number,
  stress: Number,
  energy: Number,
  sleep: Number,
  water: Number,
  alcohol: Number,
  caffiene: Number,
  food: Number,
  tags: [{ type: String, enum: TAGS }],
});

module.exports = mongoose.model("Day", Day);
