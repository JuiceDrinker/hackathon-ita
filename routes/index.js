const express = require("express");
const router = express.Router();
const axios = require("axios");
/* GET home page */
router.get("/", (req, res, next) => {
  axios
    .get("https://jsondata-italy.herokuapp.com/medals_by_year")
    .then(yearlData => {
      const data = yearlData.data.sort((a, b) => {
        return b.year - a.year;
      });
      res.render("index", { data });
    })
    .catch(err => {});
});

router.get("/sports", (req, res, next) => {
  res.render("sports");
});

router.get("/olympic", (req, res, next) => {
  res.render("olympic");
});

module.exports = router;
