const produtsController = {};
const ProductModel = require("../models/product.model");

produtsController.getAllProduct = async (req, res) => {
  try {
    const allProduct = await ProductModel.find();
    res.send(allProduct);
  } catch (error) {
    res.status(500).send("Error getting user", error);
  }
};

// produtsController.getUserById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const userFound = await ProductModel.findById(id);

//     if (!userFound) {
//       res.status(404).send({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).send({ message: "Error gettin user Id" + error });
//   }
// };

// produtsController.createUser = async (req, res) => {
//   const newUser = new ProductModel({ ...req.body });
//   try {
//     await newUser.save();
//     const allUser = await UserModel.find();
//     res.status(200).send(allUser);
//   } catch (error) {
//     res.status(500).send({ message: "Error creating an user" + error });
//   }
// };

produtsController.updateProductStock = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const product = await ProductModel.find();
    await ProductModel.updateMany({ _id: id }, { $inc: { stock: -quantity } });

    if (!product) {
      return res.status(404).send({ message: "Product no found" });
    }

    if (product.stock < quantity) {
      return res.status(400).send({ message: "Not enough stock" });
    }

    res.status(200).send({ message: "Purchase completed successfully" });
  } catch (error) {
    res.status(404).send({ message: "Error uptdating" + error });
  }
};

// produtsController.deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await ProductModel.deleteOne({ _id: id });
//     const allUser = await ProductModel.find();
//     res.status(200).send(allUser);
//   } catch (error) {
//     res.status(500).send({ message: "Error deleting user" + error });
//   }
// };

module.exports = produtsController;
