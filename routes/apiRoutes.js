var db = require("../models");
var request = require("request");


module.exports = function(app) {

	/*StreamFluence API*/
		app.get("/", function(req, res) {
				res.render("index");
		});

		app.get("/dashboard", function(req, res) {
			console.log("Displaying Tables");
				db.User.findAll({}).then(function(results) {
					res.render("index", {influencer_data: results});
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



				db.User.create({
					display_name: info.display_name,
					followers: info.followers,
					views: info.views,
					game: info.game,
					user_logo: info.logo,
					twitch_url: info.url,
					twitch_id: info._id,
					language: info.language

				}).then(function(results){
				res.redirect("/dashboard");
			});

			 });
	   });
	};
