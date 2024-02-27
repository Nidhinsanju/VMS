import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";
import vendorRouter from "./Routes/vendor.js";
import adminRouter from "./Routes/Admin.js";

dotenv.config();
var app = express();
var DATABASE_URL1 = process.env.dataBaseUrl;
var PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

mongoose.connect(DATABASE_URL1, {
  dbName: "VMS",
});

app.use("/user", userRouter);
app.use("/vendor", vendorRouter);
app.use("/admin", adminRouter);

app.listen(PORT, function () {
  console.log("server is running on port ".concat(PORT));
});
