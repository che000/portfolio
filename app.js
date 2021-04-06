const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');
const morgan    = require("morgan");
const dotenv      = require("dotenv");

//Load Config
dotenv.config({path: "./config/config.env"});

const app = express();


//Logging
if(process.env.NODE_ENV === "development"){
  app.use(morgan("dev"));
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));


const PORT = process.env.PORT || 3000;

app.listen(
  PORT, 
  console.log(`Server Started at ${process.env.NODE_ENV} mode on port ${PORT}`));