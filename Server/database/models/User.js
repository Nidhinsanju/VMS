const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  Purchase_number: Number || undefined,
  Check_IN: Boolean,
  CustomerID: Number,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
