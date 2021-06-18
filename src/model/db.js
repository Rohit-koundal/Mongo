const mongoose = require("mongoose");
const ownerSchema = new mongoose.Schema({
  name: String,
  dog: { type: mongoose.Types.ObjectId, ref: "dog" },
});

const dogSchema = new mongoose.Schema({
  name: String,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "owner",
  },
});

const ownermodel = new mongoose.model("owner", ownerSchema);
const dogmodel = new mongoose.model("dog", dogSchema);

module.exports = { ownermodel, dogmodel };
