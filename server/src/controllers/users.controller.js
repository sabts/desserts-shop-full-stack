const usersController = {};
const UserModel = require("../models/user.model");

usersController.getAllUsers = async (req, res) => {
  try {
    const allUser = await UserModel.find();
    res.send(allUser);
  } catch (error) {
    res.status(500).send("Error getting user", error);
  }
};

usersController.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userFound = await UserModel.findById(id);

    if (!userFound) {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error gettin user Id" + error });
  }
};

usersController.createUser = async (req, res) => {
  const newUser = new UserModel({ ...req.body });
  try {
    await newUser.save();
    const allUser = await UserModel.find();
    res.status(200).send(allUser);
  } catch (error) {
    res.status(500).send({ message: "Error creating an user" + error });
  }
};

usersController.updateUser = async (req, res) => {
  const { id } = req.params;
  // const newData = req.body;

  try {
    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });
    //aqui le pedimos que busque el id que coincide con el _id y de ahi hacemos un set de los cambios
    const allUser = await UserModel.find();
    res.status(200).send(allUser);
    // const userFound = await UserModel.findById(id);
    // if (!userFound) {
    //   res.status(404).send({ message: "User not found" });
    // }
  } catch (error) {
    res.status(404).send({ message: "Error uptdating user" + error });
  }
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.deleteOne({ _id: id });
    const allUser = await UserModel.find();
    res.status(200).send(allUser);
  } catch (error) {
    res.status(500).send({ message: "Error deleting user" + error });
  }
};

module.exports = usersController;
