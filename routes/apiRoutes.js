var db = require("../models");
var request = require("request");
var exphbs = require("express-handlebars");


module.exports = function(app) {

		app.get("/", function(req, res) {
			res.render("login");
		});

	/*StreamFluence API*/
		app.get("/main", function(req, res) {
				db.User.findAll({}).then(function(results) {
				/*	Hardcoded Variables*/
					var total= 0;
					var cost = 3000;


				/*Determines total impressions*/
					for (i = 0; i < results.length; i++) {
						console.log(results[i].game);
						total += results[i].views;
						console.log("The total is: " + total);
					};
				/*Determines CPM	*/
					var cpmUnrounded =  ((cost/total)*1000);
					var CPM = cpmUnrounded.toFixed(2)
					console.log(CPM);


				/*Determines ROI Percentage*/
   			    	totalBenefit = (20 * total)/1000
					var roiUnrounded = (totalBenefit/cost)*100;
					var ROI = roiUnrounded.toFixed(2);
					res.render("index", {users: results, total_views: total, cpm: CPM, roi:ROI});

				});
		

			});


		/*Goes to the addinfluencer view*/
		app.get("/addinfluencer", function(req, res) {
			console.log("Displaying Tables");
				db.User.findAll({}).then(function(results) {
					res.render("addinfluencer", {users: results});
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
				res.redirect("/main");
			});

			 });
	   });







  // If a user sends data to add a new brand
  app.post("/admin/brand", function(req, res) {

    // Take the request...
    var newBrand = req.body;
    console.log(newBrand);
    // Create a routeName
    var routeName = newBrand.brand_name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    db.Brand.create({
      routeName: routeName,
      brand_name: newBrand.brand_name,
      email: newBrand.email,
      password: newBrand.password,
 
    });

  });


};
