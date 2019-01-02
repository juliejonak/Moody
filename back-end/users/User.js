const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const User = new mongoose.Schema({
  key: { type: Number, required: true, unique: true },
  name: { type: String },
  gender: { type: Boolean },
  age: { type: Number },
  days_key: { type: Number },
  days: [{ type: ObjectId, ref: "Day" }],
});

module.exports = mongoose.model("User", User);
