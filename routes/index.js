var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');


// middleware for testing
router.use(function(req, res, next){
	console.log("======= index.js ===============");
	console.log("req.method: ", req.method);
	console.log("ueq.url: ", req.url);
	console.log("req.statusCode: ", res.statusCode);
	console.log(req.body);
	console.log("================================");
	next();
});

// serve static files
router.use(express.static('public'));

// home route
router.get('/', function (req, res) {
  	var tweets = tweetBank.list();
  	res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

// user route
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by ' + name, tweets: list, showForm: true, name:name } );
});

// id route
router.get('/users/:name/tweets/:id', function(req, res) {
	var id = req.params.id;
	var name = req.params.name;
	var tweet = tweetBank.find( { id: id });
	res.render( 'index', { title: 'Twitter.js - Tweet #' + id, tweets: tweet } );
})

router.post("/submit", function(req, res){
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name,text);
	res.redirect('/');
});

module.exports = router;