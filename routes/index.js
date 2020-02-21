const express = require("express");
const router = express.Router();
const axios = require("axios");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/sports", (req, res, next) => {
  res.render("sports");
});

router.get("/olympic", (req, res, next) => {
  res.render("olympic");
});

module.exports = router;
