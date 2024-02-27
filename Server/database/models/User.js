import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  Purchase_number: Number || undefined,
  Check_IN: Boolean,
  CustomerID: Number,
});
const User = mongoose.model("User", UserSchema);
export default User;
