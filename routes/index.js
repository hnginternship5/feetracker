var express = require('express');

var routes = express.Router();

routes.get("/", function(req, res) {
    res.status(200).send("Homepage");
});

module.exports = routes;