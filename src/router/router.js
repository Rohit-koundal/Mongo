const router = require("express").Router();
const controller = require("../controller/controller");
router.get("/", controller.index);
router.get("/product", controller.getproduct);
router.get("/category", controller.getcategory);
router.post("/category", controller.postcategory);
module.exports = router;
