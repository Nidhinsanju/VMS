import Vehicles from "../database/models/Vehicle.js";
import express from "express";
import jwt from "jsonwebtoken";
import { authenticateJwt } from "../middleware/auth.js";
import Vendors from "../database/models/Vendor.js";

const router = express.Router();
const SECRET = process.env.secret;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const pin = 123456;
  if (username == "user@gmail.com" && password === pin) {
    const token = jwt.sign({ username, role: "User" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully ", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

// router.post("/checkin", authenticateJwt, async (req, res) => {
//   const PO_num = req.body.PO_num;
//   const Vehicle = await Vehicles.findOne({ Purchase_Order: PO_num });
//   res.status(200).json({ Vehicle });
// });

router.post("/dashboard/checkin/", async (req, res) => {
  const { VehicleNumber, DC_num, PO_num, VehicleImage } = req.body;
  try {
    const POnumber = await Vendors.findOne({ Purchase_Order: PO_num });
    if (POnumber) {
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
      return res.status(200).json({ POnumber });
    }
    return res.status(304).json({ message: "Invalid Purchase Number" });
  } catch (error) {
    console.log(error);
    return res
      .status(403)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default router;
