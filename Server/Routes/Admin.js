import Vehicles from "../database/models/Vehicle.js";
import express from "express";
import jwt from "jsonwebtoken";
import { authenticateCheck } from "../middleware/adminAuth.js";
const router = express.Router();
const SECRET = process.env.superSercet;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username === "superUser@gmail.com" && password === "admin123") {
    const token = jwt.sign({ username, role: "SecuirtyCheck" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully ", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.put("/update", authenticateCheck, async (req, res) => {
  try {
    const { PO_num, data } = req.body;
    const vehicle = await Vehicles.findOne({ Purchase_Order: PO_num });
    if (vehicle) {
      vehicle.Status = data;
      await vehicle.save();
      return res.status(200).json({ message: "updated successfully", vehicle });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
export default router;
