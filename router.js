'use strict'

const router = (req, res) => {
	if (req.url === '/pa2'){
		res.end ('Bye Worl');
	} else {
		res.end('Hello World');
	}

	};

	

	module.exports=router