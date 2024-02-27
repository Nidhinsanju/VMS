import express from "express";
const router = express.Router();
import Vendors from "../database/models/Vendor.js";

router.post("/display/Details", async (req, res) => {
  const PO_num = req.body.PO_num;
  const Vendor = await Vendors.findOne({ Purchase_Order: PO_num });
  res.status(200).json({ Vendor });
});

router.post("/addvendor/", async (req, res) => {
  const { vendorName, vendorCompanyName, PO_number } = req.body;
  const vendor = await Vendors.findOne({
    Vendor_company_name: vendorCompanyName,
  });
  if (vendor) {
    res.status(403).json({ message: "Vendor already exists" });
  } else {
    const newVendor = new Vendors({
      Vendor_Name: vendorName,
      Vendor_company_name: vendorCompanyName,
      Purchase_Order: PO_number,
    });
    console.log(newVendor);
    await newVendor.save();
    res.status(200).json({ message: "vendor created successfully" });
  }
});

export default router;
