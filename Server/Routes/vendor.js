const express = require("express");
const router = express.Router();
const Vendors = require("../database/models/Vendor.js");
const Product = require("../database/models/Product.js");

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
      Products: [],
    });
    await newVendor.save();
    res.status(200).json({ message: "vendor created successfully" });
  }
});

router.put("/addproducts", async (req, res) => {
  const { ProductName, PurchaseOrder, ProductImage, Price, Quantity } =
    req.body;
  const vendor = await Vendors.findOne({ Purchase_Order: PurchaseOrder });
  const newProduct = new Product({
    Product_Name: ProductName,
    Purchase_Order: PurchaseOrder,
    ProductImage: ProductImage,
    Price: Price,
    Quantity: Quantity,
  });
  vendor.Products.push(newProduct);
  await vendor.save();
  return res.status(200).json({ message: "products added successfully" });
});

module.exports = router;
