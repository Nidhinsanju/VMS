import Vehicles from "../database/models/Vehicle.js";
import express from "express";
import jwt from "jsonwebtoken";
import { authenticateJwt } from "../middleware/auth.js";
import Vendors from "../database/models/Vendor.js";
import User from "../database/models/User.js";
import Product from "../database/models/Product.js";

const router = express.Router();
const SECRET = process.env.secret;

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: "User" }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully ", token, user });
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(504).json({ message: "User already Exists" });
    }
    const customerID = Math.floor(Math.random() * 10);
    const newUser = new User({
      username: username,
      password: password,
      CustomerID: customerID,
      Purchase_number: null,
      Check_IN: false,
    });
    await newUser.save();
    return res.status(200).json({ message: "New user created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/dashboard/status", async (req, res) => {
  const { CustomerID } = req.body;
  try {
    const user = await User.findOne({ CustomerID: CustomerID });
    const check_in = user?.Check_IN;
    const vehicle = await Vehicles.findOne({ CustomerID: CustomerID });
    if (vehicle) {
      const Status = vehicle.Status;
      return res
        .status(200)
        .json({ message: "Vehicle is Check-in ", Status, check_in });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/dashboard/checkin/", async (req, res) => {
  const { VehicleNumber, DC_num, PO_num, customerID } = req.body;
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
        CustomerID: customerID,
        Status: 0,
      });
      const user = await User.findOne({ CustomerID: customerID });
      user.Check_IN = true;
      await user.save();
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

router.put("/checkout", async (req, res) => {
  const { CustomerID } = req.body;
  try {
    const vehicle = await Vehicles.findOne({ CustomerID: CustomerID });
    if (vehicle) {
      const vehicle = await Vehicles.findOneAndDelete({
        CustomerID: CustomerID,
      });
      const user = await User.findOne({ CustomerID: CustomerID });
      user.Check_IN = false;
      await user.save();
      return res.status(200).json({ message: "Checked out successfully" });
    } else {
      return res.status(404).json({ message: "No details found for this ID" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
