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
        if (oneObj.name === undefined) {
          renderData.total = {
            golds: oneObj.gold,
            silvers: oneObj.silver,
            bronzes: oneObj.bronze
          };
        } else if (!(oneObj.name in renderData)) {
          renderData[oneObj.name] = [];
          renderData[oneObj.name].push(oneObj);
        } else {
        }
      });
      console.log("renderData.total :", renderData);
      res.render("sports", { renderData });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/olympics/:year", (req, res, next) => {
  const year = req.params.year;
  axios
    .get("https://jsondata-italy.herokuapp.com/top_athletes_by_year")
    .then(result => {
      const renderData = result.data.filter(element => {
        return (element.year = year);
      });
      renderData.total = [0, 0, 0];
      renderData.forEach(e => {
        if (!(typeof e.gold === NaN)) {
          renderData.total[0] += e.gold;
          renderData.total[1] += e.silver;
          renderData.total[2] += e.bronze;
        }
      });
      res.render("olympic", { renderData });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
