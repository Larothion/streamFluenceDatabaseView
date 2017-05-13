//Testing adding an ifluencer to the database
var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

nightmare
	.goto("https://"/*rest of heroku url needs to go here*/)
	.type('form[action="/api/addinfluencer"]', '')
	.click('#addPerson')
	.wait('.table')
	evaluate(function(){
		return document.querySelector('.table').href;
	})
	.end()
	.then(function(result){
		console.log(result +"\n We passed the test!");
	})
	.catch(function(error){
		console.error("Something went wrong with the test: ", error)
	});