var db = require("../models");
var request = require("request");


module.exports = function(app) {

	/*StreamFluence API*/
		app.get("/", function(req, res) {
				res.render("index");
		});

		app.get("/dashboard", function(req, res) {
				db.User.findAll({}).then(function(results) {
					res.render("index", {influencer_data: results});
				});
		});

	app.post("/api/sfapi/addchannel", function(req, res) {
		
		db.User.create({
					name: req.body.name,
					followers: req.body.followers,
					createdAt: req.body.createdAt

		});
	});


	/*TWITCH API*/

	app.get("/api/twitch/channel/:channel?", function(req, res) {
				
		
			var options = { method: 'GET',
				  url: 'https://api.twitch.tv/kraken/channels/' + req.params.channel,
				  qs: { client_id: 'fko5hnqrupt7b2tw6jfs93e7gn7gcu' },
				  headers: 
				   { 'postman-token': '1cb2bec7-b28d-789a-cb96-a67dbfc840a6',
				     'cache-control': 'no-cache' } };

			request(options, function (error, response, body) {
			  if (error) throw new Error(error);

			  var info = JSON.parse(body);

				 $.ajax({
	          		method: "GET"
	        	}).done(function(response) {
	        		post("/api/sfapi/addchannel", {body}).success(res.console.log("Database updated"));

				  res.json(info.name + " , " + info.followers + " , " + info.views + " , " 
				  	+ info.language + " , " + info.url + " , " +  info._id + " , " + info.logo + " , " + info.game);
	        	});
		
			});
	});

}

