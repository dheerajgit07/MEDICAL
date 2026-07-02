const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    category: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, default: 0 },
    image: { type: String, required: true, trim: true }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
