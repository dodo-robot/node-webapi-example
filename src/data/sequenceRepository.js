var logger = require('log4js').getLogger();

var sequenceRepository = {

	getId: function(mongo, callback){
		mongo.collection("sequence").findOneAndUpdate(
			{ name: "persons" }, 
			{ $inc: {seq: 1} }, 
			{ upsert: true }, 
			function(err, doc) {
				if (err) {  
					throw err; 
				}
				else { 
					if(doc.value){
						callback(doc.value.seq); 
					}else {
						if(doc.ok){
							console.log("sequence created");
							callback(0);
						}
					}
				}
			}); 
	}
 
}

module.exports = sequenceRepository;