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

router.get("/sports/:sport", (req, res, next) => {
  const sport = req.params.sport;
  axios
    .get(`https://jsondata-italy.herokuapp.com/top_${sport}`)
    .then(result => {
      const renderData = {};
      result.data.forEach(oneObj => {
        
      });
      res.render("sports", sorted);
    })
    .catch(err => {});
});

router.get("/olympic/:year", (req, res, next) => {
  console.log("success!");
  res.render("olympic");
});

module.exports = router;
