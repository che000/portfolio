const express = require("express");

const router = express.Router();



router.get('/', function (req, res) {
  res.render('landing');
});

router.get('/projects', function (req, res) {
  res.render('projects');
});

router.get('/contacts', function (req, res) {
  res.render('contacts');
});

router.get('/home', function (req, res){
  res.render('home');
});



module.exports = router;