var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();
app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 8080; 

var db = require('./model/db');
var team = require('./model/team');
var member = require('./model/member');

var teams = require("./routes/teams");
var members = require("./routes/members");

// 

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/teams', teams);
app.use('/members',members)

app.listen(port);
console.log("App listening on port " + port);

module.exports = app;
