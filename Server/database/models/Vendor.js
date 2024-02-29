const mongoose = require("mongoose");

const VendorsSchema = new mongoose.Schema({
  Vendor_company_name: String,
  Vendor_Name: String,
  Purchase_Order: Number,
  Products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});
const Vendors = mongoose.model("Vendors", VendorsSchema);
module.exports = Vendors;
