import mongoose from "mongoose";

const VehiclesSchema = new mongoose.Schema({
  Vehicle_Number: String,
  TimeStamp: String,
  Purchase_Order: Number,
  Delivery_Challan: Number,
  VehicelImage: String,
});

const Vehicles = mongoose.model("Vehicles", VehiclesSchema);

export default Vehicles;
