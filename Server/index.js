import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
var app = express();
var DATABASE_URL1 = process.env.dataBaseUrl;
var PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
try {
  mongoose.connect(DATABASE_URL1, {
    dbName: "VMS",
  });
  console.log("Success");
} catch {
  console.log("error");
}
app.listen(PORT, function () {
  console.log("server is running on port ".concat(PORT));
});
