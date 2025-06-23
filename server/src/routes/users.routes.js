const express = require("express");
const productsController = require("../controllers/products.controller");
const productRoutes = express.Router();

productRoutes.get("/", productsController.getAllProduct);
productRoutes.patch("/bulk-stock", productsController.updateProductStock);

module.exports = productRoutes;
