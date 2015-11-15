// app/controllers/index.js
//CODING STANDARD - https://github.com/felixge/node-style-guide

// ============
// Dependencies
// ============
// Package Dependencies
var express = require('express');
var router 	= express.Router();

// =======
// Routes 
// =======
// Landing Page
router.get('/', function(req, res) {
	req.log.info({statu: 200}, 'SUCCESS - Rendering Landing Page');
	res.render('index');
});

// =======
// Exports
// =======
module.exports = router;