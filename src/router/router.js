const router = require("express").Router();
const schema = require("../model/db");
const controller = require("../controller/controller");
router.get("/", controller.index);
router.get("/product", controller.getproduct);
router.get("/category", controller.getcategory);
router.post("/category", controller.postcategory);

router.get("/dog", async (req, res) => {
  dogs = { name: "kutta" };
  owners = { name: "Rohit" };
  const newdogs = await new schema.dogmodel(dogs);
  newdogs.save();
  const newowner = await new schema.ownermodel(owners);
  newowner.save();
  res.json[{ newdogs, newowner }];
  console.log(newdogs, newowner);
});
module.exports = router;
