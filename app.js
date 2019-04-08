const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/index.router");

//set view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//public folder
app.use(express.static(path.join(__dirname, "public")));

//use json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use("/", indexRouter);

app.listen(process.env.port, () =>
  console.log(`port ${process.env.port} is running !`)
);
