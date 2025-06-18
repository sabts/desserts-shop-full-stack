const produtsController = {};
const ProductModel = require("../models/product.model");

produtsController.getAllProduct = async (req, res) => {
  try {
    const allProduct = await ProductModel.find();
    res.send(allProduct);
  } catch (error) {
    console.error("Error in getAllProduct:", error);
    res.status(500).send("Error getting user", error);
  }
};

produtsController.updateProductStock = async (req, res) => {
  const cartItems = req.body;
  try {
    const updates = cartItems.map(product => ({
      updateOne: {
        filter: { _id: product.id },
        update: { $inc: { stock: -product.quantity } },
      },
    }));

    await ProductModel.bulkWrite(updates);
    const allProduct = await ProductModel.find();
    res.status(200).send({ message: "Purchase completed successfully" });
  } catch (error) {
    res.status(404).send({ message: "Error uptdating" + error });
  }
};
module.exports = produtsController;
