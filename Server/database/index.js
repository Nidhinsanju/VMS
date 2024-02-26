const mongoose = require("mongoose");

const VehiclesSchema = new mongoose.Schema({
  Vehicle_Number: Number,
  TimeStamp: String,
  Purchase_Order: Number,
  Delivery_Challan: Number,
  VehicelImage: String,
});

const UsersSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  Customer_ID: Number,
});

const VendorsSchema = new mongoose.Schema({
  Name: String,
  Comapny_name: String,
  Purchase_Order: Number,
});

// Define mongoose models
const User = mongoose.model("User", UsersSchema);
const Vehicles = mongoose.model("Vehicles", VehiclesSchema);
const Vendors = mongoose.model("Vendors", VendorsSchema);

module.exports = {
  User,
  Vehicles,
  Vendors,
};
