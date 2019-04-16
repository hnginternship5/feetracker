var express = require('express');
var exphbs = require("express-handlebars");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var routes = require('./routes');

const app = express();

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routes);

console.log("Server running on port 3000");

module.exports = app;