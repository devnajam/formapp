const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.post('/', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  res.render('result', { name: name, age: age, country: country });
});

module.exports = router;
