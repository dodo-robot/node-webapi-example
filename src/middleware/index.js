import { Router } from 'express';

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here
	// a middleware function with no mount path. This code is executed for every request to the router
	routes.use(function (req, res, next) {
		console.log('Time:', Date.now())
		next()
	});

	// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
	routes.use('/api/v1/:id', function (req, res, next) {
		console.log('Request URL:', req.originalUrl)
		next()
	}, function (req, res, next) {
		console.log('Method Type:', req.method)
		next()
	}, function (req, res, next) {
		console.log('Request Type:', req.method)
		next()
	}, function (req, res, next) {
		console.log('Remote Address:', req.connection.remoteAddress)
		next()
	});

	return routes;
}
