const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(
  logger(formatsLogger, {
    skip: function (req, res) {
      return res.statusCode === 404;
    },
  })
);

const optionCors = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  allowedHeaders: "*",
};
app.use(cors(optionCors));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.static("public"));

module.exports = app;
