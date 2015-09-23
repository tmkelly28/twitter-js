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
	console.log("================================");
	next();
});

// serve static files
router.use(express.static('public'));

// home route
router.get('/', function (req, res) {
  	var tweets = tweetBank.list();
  	res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;