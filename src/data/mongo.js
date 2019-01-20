var logger = require('log4js').getLogger();
var MongoClient = require('mongodb').MongoClient;

var mongoUtil = {

    init: function (callback) {

        var mongoUrl = 'mongodb://localhost:27017';

        console.log("Connecting to [ "+mongoUrl+" ]");

        var options = {
            autoReconnect: true, //reconnect on error
            poolSize: 30, //Set the maximum poolSize for each individual server or proxy connection
            keepAlive: 1,
            reconnectTries: Number.MAX_VALUE, //Server attempt to reconnect #times
            reconnectInterval: 2000 //Server will wait # milliseconds between retries,
        };

        MongoClient.connect(mongoUrl, options, function(err, client) {
            if(!err) {
                console.log("----- CONNECTED -----");
                module.exports.db = client.db("testdb");
                callback();
            }else{
                logger.error(err, "---- NOT CONNECTION TO MONGODB FROM ----");
                callback(err);
            }
            client.on('close', function() {
                console.log("----- CLOSED CONNECTION TO MONGODB -----");
            });
            client.on('reconnect', function() {
                console.log("----- RECONNECTING TO MONGODB -----");
            });
        });
    }
};

module.exports = mongoUtil;