const categoryModel = require("../model/CategoryModel");

exports.GetCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find().sort({ name: 1 });
    return res.status(200).send({ status: true, data: categories });
  } catch (err) {
    return res.status(500).send({ status: false, msg: "Server error", error: err.message });
  }
};

exports.AddCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).send({ status: false, msg: "Category name is required." });
    }

    const existingCategory = await categoryModel.findOne({ name: name.trim() });
    if (existingCategory) {
      return res.status(409).send({ status: false, msg: "Category already exists." });
    }

    const newCategory = await categoryModel.create({ name: name.trim() });
    return res.status(201).send({ status: true, msg: "Category added successfully.", data: newCategory });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).send({ status: false, msg: "Duplicate category name not allowed." });
    }
    return res.status(500).send({ status: false, msg: "Server error", error: err.message });
  }
};
