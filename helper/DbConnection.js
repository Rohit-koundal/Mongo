const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/rohit", {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection Successfully : MongoDB Database");
  })
  .catch((err) => {
    console.log(err.message);
  });
module.exports = mongoose;
