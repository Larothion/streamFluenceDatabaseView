//Testing adding an ifluencer to the database
var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

//This should result in the person being added to the table on the main screen.
nightmare
	.goto("https://fast-lake-48436.herokuapp.com/")
	.type('form[action="/api/addinfluencer"]', 'vexxgaming')
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