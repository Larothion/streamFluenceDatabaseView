var db = require("../models");
var request = require("request");



module.exports = function(app) {

		app.get("/", function(req, res) {
			res.render("login");
		});

	/*StreamFluence API*/
		app.get("/main", function(req, res) {
				db.Influencer.findAll({});
				});


		/*Goes to the addinfluencer view*/
		app.get("/addinfluencer", function(req, res) {
			console.log("Displaying Tables");
				db.Influencer.findAll({}).then(function(results) {
					res.render("addinfluencer", {influencers: results});
				});
		});


	/*TWITCH API*/

	app.get("/api/addinfluencer", function(req, res) {
				
			var influencer_name = req.query['influencer_name'];
			var options = { method: 'GET',
				  url: 'https://api.twitch.tv/kraken/channels/' + influencer_name,
				  qs: { client_id: 'fko5hnqrupt7b2tw6jfs93e7gn7gcu' },
				  headers: 
				   { 'postman-token': '1cb2bec7-b28d-789a-cb96-a67dbfc840a6',
				     'cache-control': 'no-cache' } };
			console.log("This is the name: " + influencer_name);

			request(options, function (error, response, body) {
			  if (error) throw new Error(error);
			  var info = JSON.parse(body);



				db.Influencer.create({
					display_name: info.display_name,
					followers: info.followers,
					views: info.views,
					game: info.game,
					influencer_logo: info.logo,
					twitch_url: info.url,
					twitch_id: info._id,
					language: info.language

				}).then(function(results){
				res.redirect("/");
			});

			 });
	   });
};
