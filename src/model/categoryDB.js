const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
});
const categoryModel = new mongoose.model("category", categorySchema);
module.exports = categoryModel;
