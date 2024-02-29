const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routes/user.js");
const vendorRouter = require("./Routes/vendor.js");
const adminRouter = require("./Routes/Admin.js");

dotenv.config();
const app = express();
const DATABASE_URL1 = process.env.dataBaseUrl;
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    mongoose.connect(DATABASE_URL1, {
      dbName: "VMS",
    });
  } catch (error) {
    process.exit(1);
  }
};
app.get("/test", async (req, res) => {
  try {
    res.status(200).json({ message: "Hi there im running" });
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
});

app.use("/user", userRouter);
app.use("/vendor", vendorRouter);
app.use("/admin", adminRouter);

connectDB().then(() => {
  app.listen(PORT, function () {
    console.log("server is running on port ".concat(PORT));
  });
});
