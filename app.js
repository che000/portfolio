const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/projects', function (req, res) {
  res.render('projects');
});

app.get('/contacts', function (req, res) {
  res.render('contacts');
});

app.get('/landing', function (req, res){
  res.render('landing');
});

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log('Server started...');
});
