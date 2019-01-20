// var logger = require('log4js').getLogger();

var sequenceRepository = {

	getId: function(mongo, callback){
		mongo.getCollection("sequence").findOneAndUpdate(
			{ name: "persons" }, 
			{ $inc: {seq: 1} }, 
			{ upsert: true }, 
			function(err, doc) {
				if (err) {  
					throw err; 
				}
				else { 
					callback(doc.value.seq); 
				}
			}); 
	}
 
}

module.exports = sequenceRepository;