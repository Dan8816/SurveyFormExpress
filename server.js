// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
var app = express();
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));
// This is for using the static folder for images, stylesheets, and scripts
app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.set('view engine', 'ejs');
// new code
var session = require('express-session');
// more new code:
app.use(session({
  secret: 'My_SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }//max session is 60K milliseconds
}))
require("./server/config/routes")(app)
app.listen(8000, function() {
  console.log("listening on port 8000");
})