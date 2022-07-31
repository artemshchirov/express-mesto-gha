const routes = require("express").Router();
const { userRoutes } = require("./userRoutes");
const { cardRoutes } = require("./cardRoutes");

const { NOT_FOUND } = require("../utils/constants");

routes.use("/users", userRoutes);
routes.use("/cards", cardRoutes);

routes.use("/", (req, res) => {
  res.status(NOT_FOUND).send("404 Not Found");
});

module.exports = { routes };