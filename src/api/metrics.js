import resource from 'resource-router-middleware';
import DummyMetric from '../models/DummyMetric';
import personRepository from '../data/personRepository';

var logger = require('log4js').getLogger();

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'metric',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		// Open the connection to the server
		personRepository.findOne(db, id,  function(result){
			let err = result ? null : 'Not found';
			callback(err, result);
		});
	},

	/** GET /:id - Return a given entity */
	read({ metric }, res) {
		let m = new DummyMetric(metric.firstName+" "+metric.lastName);
		res.json(m);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.sendStatus(400);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		res.sendStatus(400);
	},

	/** PUT /:id - Update a given entity */
	update({ person, body }, res) {
		res.sendStatus(400);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ person }, res) {
		res.sendStatus(400);
	}

});
