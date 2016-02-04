var data = require("../data.json");


exports.addFriend = function(req, res) {    
    res.render('add', data);
	// Your code goes here
    var name = req.query.name;
    var desc = req.query.description;
    var newfriend = {
			"name": name,
			"description": desc,
			"imageURL": "http://lorempixel.com/400/400/people"			
		};
    data["friends"].push(newfriend);
 }