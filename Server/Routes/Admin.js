import Vehicles from "../database/models/Vehicle.js";
import express from "express";
import jwt from "jsonwebtoken";
import { authenticateJwt } from "../middleware/auth.js";
import Vendors from "../database/models/Vendor.js";
const router = express.Router();
const SECRET = process.env.superSercet;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const pin = 987654;
  if (username == "superUser@gmail.com" && password === pin) {
    const token = jwt.sign({ username, role: "SecuirtyCheck" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully ", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});
export default router;
