import { Product } from "../models/Products";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: "desc" });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const setProducts = async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
    });
    const product = await newProduct.save();

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  if (mongoose.isValidObjectId(id) === false) {
    return res
      .status(404)
      .json({ message: "The product with this id was not found" });
  }

  try {
    await Product.updateOne(
      {_id: id} ,
      {
        name,
        price,
        description,
      }
    );

    return res
      .status(200)
      .json({ message: "Your product has been successfully updated" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;
console.log(id)
  if (mongoose.isValidObjectId(id) === false) {
    return res
      .status(404)
      .json({ message: "The product with this id was not found" });
  }

  try {
    await Product.deleteOne({_id: id});
    return res
      .status(200)
      .json({ message: "Your product has been successfully deleted" });
  } catch (error) {
    return res.status(400).json(error);
  }
};
