var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

// Configure file rendering
swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// configure body parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// set the server to listen
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
var io = socketio.listen(server);

// Delegate routing to routes directory
app.use('/', routes(io));