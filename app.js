var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');

// Configure file rendering
swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Delegate routing to routes directory
app.use('/', routes);

// set the server to listen
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});