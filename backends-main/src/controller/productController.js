const productModel = require("../model/ProductModel");
const { ProductProfileURL } = require("../cloudinary/ImageUrl");

exports.GetProducts = async (req, res) => {
  try {
    const products = await productModel.find().sort({ createdAt: -1 });
    return res.status(200).send({ status: true, data: products });
  } catch (err) {
    return res.status(500).send({ status: false, msg: "Server error", error: err.message });
  }
};

exports.AddProduct = async (req, res) => {
  try {
    const { name, category, price, description, stock } = req.body;

    const requiredFields = { name, category, price, description, stock };

    for (let key in requiredFields) {
      if (!requiredFields[key]) {
        return res.status(400).send({ status: false, msg: `${key} is required.` });
      }
    }

    if (!req.file || !req.file.buffer) {
      return res.status(400).send({ status: false, msg: "Product image is required." });
    }

    const existingProduct = await productModel.findOne({ name });
    if (existingProduct) {
      return res.status(409).send({ status: false, msg: "Product with this name already exists." });
    }

    const uploadResult = await ProductProfileURL(req.file.buffer);
    if (!uploadResult?.secure_url) {
      return res.status(500).send({ status: false, msg: "Image upload failed." });
    }

    const newProduct = await productModel.create({
      name,
      category,
      price,
      description,
      stock,
      image: uploadResult.secure_url,
    });

    return res.status(201).send({ status: true, msg: "Product added successfully.", data: newProduct });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).send({ status: false, msg: "Duplicate name not allowed." });
    }
    return res.status(500).send({ status: false, msg: "Server error", error: err.message });
  }
};

exports.UpdateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, category, price, description, stock } = req.body;
    let updateData = { name, category, price, description, stock };

    // If a new image is provided, upload and update
    if (req.file && req.file.buffer) {
      const uploadResult = await ProductProfileURL(req.file.buffer);
      if (!uploadResult?.secure_url) {
        return res.status(500).send({ status: false, msg: "Image upload failed." });
      }
      updateData.image = uploadResult.secure_url;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(productId, updateData, { new: true });
    
    if (!updatedProduct) {
      return res.status(404).send({ status: false, msg: "Product not found." });
    }

    return res.status(200).send({ status: true, msg: "Product updated successfully.", data: updatedProduct });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).send({ status: false, msg: "Duplicate name not allowed." });
    }
    return res.status(500).send({ status: false, msg: "Server error", error: err.message });
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await productModel.findByIdAndDelete(productId);
    
    if (!deletedProduct) {
      return res.status(404).send({ status: false, msg: "Product not found." });
    }

    return res.status(200).send({ status: true, msg: "Product deleted successfully." });
  } catch (err) {
    return res.status(500).send({ status: false, msg: "Server error", error: err.message });
  }
};
