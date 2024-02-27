import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  Product_Name: { type: String },
  Purchase_Order: Number,
  ProductImage: String,
  Price: Number,
  Quantity: Number,
});
const Product = mongoose.model("Product", ProductSchema);
export default Product;
