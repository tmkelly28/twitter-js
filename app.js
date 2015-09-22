var express = require('express');
var app = express();

app.use(function(req, res, next){
	console.log(req.method);
	console.log(req.url);
	console.log(res.statusCode);
	console.log("==============================")
	next();
})


app.get('/', function(request, response) {
	response.send("Hello, world!");
})

app.get('/about', function(request, response ){
	response.send("What are you talking about??");
})

app.listen(8080);
console.log('Listening on port 8080');