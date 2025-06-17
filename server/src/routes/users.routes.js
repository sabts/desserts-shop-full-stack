const express = require("express");
const ProductModel = require("../models/product.model");
const produtsController = require("../controllers/products.controller");
const productRoutes = express.Router();

productRoutes.get("/", produtsController.getAllProduct);
productRoutes.patch("/bulk-stock", produtsController.updateProductStock);

module.exports = productRoutes;
