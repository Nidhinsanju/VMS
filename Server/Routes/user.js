import Vehicles from "../database/models/Vehicle.js";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import { authenticateJwt } from "../middleware/auth.js";
import Vendors from "../database/models/Vendor.js";
const SECRET = process.env.secret;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const token = jwt.sign({ username, role: "User" }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Logged in successfully ", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.post("/display/Details", authenticateJwt, async (req, res) => {
  const PO_num = req.body.PO_num;
  const Vendor = await Vendors.findOne({ Purchase_Order: PO_num });
  res.status(200).json({ Vendor });
});

router.post("/checkin", authenticateJwt, async (req, res) => {
  const PO_num = req.body.PO_num;
  const Vehicle = await Vehicles.findOne({ Purchase_Order: PO_num });
  res.status(200).json({ Vehicle });
});

router.post("/dashboard/checkin/", async (req, res) => {
  const { VehicleNumber, DC_num, PO_num, VehicleImage } = req.body;
  try {
    const noexisitingPO = PO_num;
    if(!noexisitingPO){
      res.status(304).json({message:""})
    }
    const currentDateAndTime = new Date();
    const formattedDateAndTime = currentDateAndTime.toLocaleString();
    const newVehicle = new Vehicles({
      Vehicle_Number: VehicleNumber,
      TimeStamp: formattedDateAndTime,
      Purchase_Order: PO_num,
      Delivery_Challan: DC_num,
      VehicelImage: VehicleImage,
    });
    await newVehicle.save();
    const Vehicle = await Vehicles.findOne({ Purchase_Order: PO_num });
    res.status(200).json({ Vehicle });
  } catch (error) {
    console.log(error);
    res
      .status(403)
      .json({ message: "Internal server error", error: error.message });
  }
});

// router.post("", authenticateJwt, async (req, res) => {
//   try {
//     const user = await User.findOne({ CustomerId });
//     if (user) {
//       const cart = await Cart.findOne({ CustomerId });
//       if (cart.products.length > 0) {
//         const product = await Product.findOne({
//           ProductID: req.params.productId,
//         });
//         const updatedProducts = cart.products.filter(
//           (p) => p.ProductID !== product.ProductID
//         );
//         cart.products = updatedProducts;
//         await cart.save();
//         res.status(200).json({ message: "Product Deleted from Cart" });
//         await user.save();
//       } else {
//         res.status(404).json({ message: "No Product in cart" });
//       }
//     } else {
//       res.status(403).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(403).json({ message: "internal server error", error });
//   }
// });

// router.post("/signup", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (user) {
//     res.status(403).json({ message: "User already exists" });
//   } else {
//     const newUser = new User({ username, password });
//     await newUser.save();
//     const token = jwt.sign({ username, role: "user" }, SECRET, {
//       expiresIn: "1h",
//     });
//     res.status(200).json({ message: "User created successfully", token });
//   }
// });

export default router;
