// app.js
// CODING STANDARD - https://github.com/felixge/node-style-guide
// APP STRUCTURE - http://www.terlici.com/2014/08/25/best-practices-express-structure.html

// ============
// Dependencies
// ============
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var sass        = require('node-sass-middleware');

// =============
// Configuration
// =============
// Variables
var sassObject = {
  root: __dirname + '/app/public/stylesheets',
  src: '/',
  dest: '/css',
  debug: true,
  sourceComments: true,
  outputStyle: 'expanded'
};

// Env Setup
if (process.env.NODE_ENV === 'production') {
  sassObject.outputStyle = 'compressed';
  sassObject.sourceComments = false;
  sassObject.debug = false;
}

// Set & Use
app.set('views', __dirname + '/app/public/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(sass(sassObject)); // Compiles SASS to css

// ==========
// Middleware
// ==========
// Middleware for all files 
// TODO need to handle static files not sending logs
app.use(require(__dirname + '/app/middlewares/logger.js'));

// ============
// Static Files
// ============
app.use(express.static(__dirname + '/app/public/fonts'));
app.use(express.static(__dirname + '/app/public/images'));
app.use(express.static(__dirname + '/app/public/javascripts'));
app.use(express.static(__dirname + '/app/public/stylesheets/css'));


// ======
// Routes
// ======
app.use(require('./app/controllers'));


// ===============
// Starting Server
// ===============
app.listen(process.env.PORT);
console.log('Consumer Dashboard Listening On Port ' + process.env.PORT);