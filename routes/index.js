var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use(function(req, res, next) {
	if (/* make sure that it's a valid filepath */) {
		res.sendFile(req.path);
	} else {
		next();
	}
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;