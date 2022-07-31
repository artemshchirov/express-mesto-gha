const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { routes } = require("./src/routes");

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

const PUBLIC_FOLDER = path.join(__dirname, "public");

app.use(express.static(PUBLIC_FOLDER));

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path} ${JSON.stringify(req.body)}`);
  next();
});

app.use((req, res, next) => {
  req.user = {
    _id: "62e64c0f2b9f35a3909acaff",
  };

  next();
});

app.use(routes);

function main() {
  try {
    mongoose.connect("mongodb://localhost:27017/mestodb", (err) => {
      if (err) throw err;
      console.log("Connected to db");
    });
  } catch (err) {
    console.log(`err: ${err}`);
    // handleError(err);
  }

  app.listen(PORT);
  console.log(`Server listen on ${PORT}`);
}

main();