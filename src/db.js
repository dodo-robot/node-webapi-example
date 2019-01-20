var logger = require('log4js').getLogger();
var mongo = require('./data/mongo');

export default callback => {
	mongo.init(function (err) {
		if (err) {
			logger.error("MongoDB connection error");
			throw err;
		} else {
			console.log("________MongoDB connected successfully_______");
			callback(mongo.db);
		}
	});
}
