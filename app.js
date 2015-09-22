var express = require('express');
var app = express();
var swig = require('swig');

swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(function(req, res, next){
	console.log(req.method);
	console.log(req.url);
	console.log(res.statusCode);
	console.log("==============================")
	next();
})


app.get('/', function(request, response) {
	response.render('index', {
			title: 'My Awesome Page',
			people: [{name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermoine'}]
		});
})

app.get('/about', function(request, response ){
	response.send("What are you talking about??");
})

app.listen(8080);
console.log('Listening on port 8080');