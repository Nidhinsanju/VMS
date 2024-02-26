import mongoose from "mongoose";
import Product from "./Product.js";

const VehiclesSchema = new mongoose.Schema({
  Vehicle_Number: String,
  TimeStamp: String,
  Purchase_Order: Number,
  Delivery_Challan: Number,
  VehicelImage: String,
  Products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Vehicles = mongoose.model("Vehicles", VehiclesSchema);

export default Vehicles;
