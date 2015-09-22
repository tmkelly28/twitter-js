var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
app.use('/', routes);


swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// middleware for testing
app.use(function(req, res, next){
	console.log(req.method);
	console.log(req.url);
	console.log(res.statusCode);
	console.log("==============================")
	next();
})


app.listen(8080);
console.log('Listening on port 8080');