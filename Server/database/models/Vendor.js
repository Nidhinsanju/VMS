import mongoose from "mongoose";

const VendorsSchema = new mongoose.Schema({
  Name: String,
  Comapny_name: String,
  Purchase_Order: Number,
});
const Vendors = mongoose.model("Vendors", VendorsSchema);
export default Vendors;
