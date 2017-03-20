var bodyParser     =        require("body-parser");
var express = require('express');
var expressapp = express();
var fs = require("fs");
//Here we are configuring express to use body-parser as middle-ware.
expressapp.use(bodyParser.urlencoded({ extended: false }));
expressapp.use(bodyParser.json());

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

expressapp.get('/listUsers', function (req, res) {
	
   fs.readFile( __dirname + "/resources/db/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})


expressapp.post('/addUser', function (req, res) {
	//console.log(req);
   // First read existing users.
 	fs.readFile( __dirname + "/resources/db/" + "users.json", 'utf8', function (err, data) {
		var user = req.body;
		data = JSON.parse(data);
		data.user2 = user;
		console.log(data);
	});
	//saveData(req.body);
    res.end(JSON.stringify(req.body));
})

/*
expressapp.get('/getUser/:id', function (req, res) {
	//console.log(req);
   // First read existing users.
 	fs.readFile( __dirname + "/resources/db/" + "users.json", 'utf8', function (err, data) {
		
		data = JSON.parse(data);
		var user = data["user"+req.params[0])];
		console.log(user);
	});
	//saveData(req.body);
    res.end(JSON.stringify(user));
})


function saveData(dataToSave){
	fs.readFile( __dirname + "/resources/db/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(JSON.stringify(data));
		//console.log(JSON.stringify(data));
		
		data["user5"] = JSON.parse(JSON.stringify(dataToSave));
		fs.writeFile( __dirname + "/resources/db/" + "users.json", JSON.stringify(dataToSave), 'utf8', function (err) {
		  if (err) return console.log(err);
		});
	});
}
*/

var server = expressapp.listen(5051, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})