const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  quantity: {
    type: Number,
    default: null,
  },
  catgoryId: {
    type: String,
    default: null,
  },
});
const productModel = new mongoose.model("products", productSchema);
module.exports = productModel;
