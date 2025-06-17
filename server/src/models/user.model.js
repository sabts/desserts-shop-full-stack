const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: String,
  },
  { timestamps: true, collection: "userCollection" }
);

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
