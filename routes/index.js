const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/sports', (req, res, next) => {
  res.render('sports');
});

router.get('/olympic', (req, res, next) => {
  res.render('index');
});



//app.get('/')
//app.get('/sport/:id')
//app.get('/olympic/:year)

module.exports = router;
