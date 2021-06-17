const categoryModel = require("../model/categoryDB");
const productModel = require("../model/productDB");
exports.index = (req, res) => {
  res.render("index");
};

exports.getproduct = (req, res) => {
  categoryModel
    .find({})
    .then((data) => {
      res.render("product", { data: data, message: "", status: "active" });
    })
    .catch((err) => {
      res.render("product", {
        data: "",
        message: err.message,
        status: "Inactive",
      });
    });

  const data = productModel
    .aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "catgoryId",
          foreignField: "_id",
          as: "categoryID",
        },
      },
    ])
    .exec((err, result) => {
      if (err) {
        console.log("error", err);
      }
      if (result) {
        console.log(result);
      }
    });
};
exports.postproduct = (req, res) => {};
exports.getcategory = (req, res) => {
  categoryModel
    .find({})
    .then((data) => {
      res.render("category", { data: data, message: "", status: "active" });
    })
    .catch((err) => {
      res.render("category", {
        data: "",
        message: err.message,
        status: "Inactive",
      });
    });
};

exports.postcategory = (req, res) => {
  const { title, description } = req.body;
  if (title === "" || description === "") {
    res.render("category", {
      message: "Something went wrong",
      status: "danger",
    });
  } else {
    const allDetails = {
      title: title,
      description: description,
    };
    const saveData = new categoryModel(allDetails);
    saveData
      .save()
      .then(() => {
        res.render("category", {
          message: "Data Saved Sucssfully",
          status: "success",
        });
      })
      .catch((err) => {
        res.render("category", {
          message: err.message,
          status: "danger",
        });
      });
  }
};
