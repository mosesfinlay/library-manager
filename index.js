const express = require("express");
const app = express();

const sequelize = require("./models").sequelize;
const bodyParser = require("body-parser");

app.use("/static", express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/");

app.use(routes);

app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.render("page-not-found", { err });
});

sequelize.sync().then(() => {
  app.listen(3000);
});
