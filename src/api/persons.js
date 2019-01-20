import resource from 'resource-router-middleware';
import Person from '../models/Person';
import personRepository from '../data/personRepository';
import sequenceRepository from '../data/sequenceRepository';
import personValidator from '../validation/personValidator';

var logger = require('log4js').getLogger();

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'person',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		// Open the connection to the server
		personRepository.findOne(db, id,  function(result){
			console.log(id);
			let err = result ? null : 'Not found';
			callback(err, result);
		});
	},

	
	/** GET / - List all entities */
	index({ params }, res) {
		personRepository.findAll(db, function(result){
			res.json(result);
		});
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		let result = personValidator.validate(body);
		if(result.valid){
			sequenceRepository.getId(db, function(id){
				let person = new Person(id, body.firstName, body.lastName);
				personRepository.insert(db, person, function (err, records) {
					res.json(records);
				});
			});
		}else{
			res.status(500).json(result.errors);
		}
	},
	

	/** GET /:id - Return a given entity */
	read({ person }, res) {
		res.json(person);
	},

	/** PUT /:id - Update a given entity */
	update({ person, body }, res) {
		let result = personValidator.validate(body);
		if(result.valid){
			person.firstName = body.firstName;
			person.lastName = body.lastName
			personRepository.update(db, person, function (err, records) {
				res.status(204).json(records);
			});
		}
	},

	/** DELETE /:id - Delete a given entity */
	delete({ person }, res) {
		console.log(person);
		personRepository.delete(db, person.id, function (err, records) {
			res.status(204).json(records);
		});
		
	}
});
