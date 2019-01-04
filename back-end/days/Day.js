const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const TAGS = [
  "running",
  "hiking",
  "swimming",
  "walking",
  "injury",
  "traveling",
  "reading",
  "lounging",
  "heavy labor",
  "date",
  "shopping",
  "socializing",
];

const Day = new mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now,
  },
  mood: Number,
  stress: Number,
  energy: Number,
  sleep: Number,
  water: Number,
  alcohol: Number,
  caffeine: Number,
  food: Number,
  tags: [{ type: String, enum: TAGS }],
});

module.exports = mongoose.model("Day", Day);
