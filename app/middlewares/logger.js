// app/middleware/logger.js
// CODING STANDARD - https://github.com/felixge/node-style-guide

// ============
// Dependencies
// ============
var bunyan 	= require('bunyan'); 	// Logger
var log 		= bunyan.createLogger({
			      		name: "Glow App",
			        	port: process.env.PORT
			      	});

// ======
// Logger
// ======
/**
	* Logger for all the paths
	**/
module.exports = function(req, res, next) {
 	req.log = log.child({ip: req.headers['x-forwarded-for'], endpoint: req.url.substring(0, 140)});
  next(); // proceeding the req to the endpoints
};