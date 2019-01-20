// var logger = require('log4js').getLogger();

var personRepository = {

    insert: function(mongo, person, callback){
		mongo.collection("persons").insertOne(person, callback);
	},
 
	
	findAll: function(mongo, callback){
		mongo.collection("persons").find({}, function(err, result) {
			if (err) throw err;
			return result.toArray();
		}).then(result =>{
			callback(result);
		});
	},

	update: function(mongo, person, callback){
		var myquery = { id: person.id };
		var newvalues = { $set: person };
		mongo.collection("persons").updateOne(myquery, newvalues, function(err, result) {
			if (err) throw err;
			callback(result);
		}) 
	},

	delete: function(mongo, id, callback){
		mongo.collection("persons").deleteOne(
			{ id : parseInt(id) }, 
			function(err, result) {
				if (err) {
					throw err;
				}
				callback(result);
			}) 
	},
	
	findOne: function(mongo, personId, callback){
		mongo.collection("persons").findOne( 
			{ id : parseInt(personId) }, 
			function(err, result) {
				if (err) {
					throw err;
				}
				callback(result);
			}) 
	}
}

module.exports = personRepository;