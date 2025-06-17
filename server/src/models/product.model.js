const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    title: String,
    price: Number,
    stock: Number,
    imgMobile: String,
    imgTablet: String,
    imgDesktop: String,
    imgThumbnail: String,
    alt: String,
  },
  { timestamps: true, collection: "dessertsCollection" }
);

const UserModel = mongoose.model("desserts", userSchema);

module.exports = UserModel;
