const express = require("express");
const app = express();
const DB = require("./helper/DbConnection");
const port = process.env.PORT || 5000;
app.use(express.static("/view"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "view");
app.use(require("./src/router/router"));
app.listen(port, () => {
  console.log(`Server on :${port}`);
});
