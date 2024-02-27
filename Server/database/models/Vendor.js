import mongoose from "mongoose";

const VendorsSchema = new mongoose.Schema({
  Vendor_company_name: String,
  Vendor_Name: String,
  Purchase_Order: Number,
});
const Vendors = mongoose.model("Vendors", VendorsSchema);
export default Vendors;
