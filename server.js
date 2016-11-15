var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');
var db = require('./db/db.js');
var userRouter = require('./routes.js');

var app = express();

// body parser
app.use(bp());

//look for static files: css, html, js @ public
app.use(express.static(__dirname + '/public'));

//routing
app.use('/api', userRouter);

//app listening to port 3000 at local host
app.listen(3000, function() {
  console.log('server listening at port 3000');
});