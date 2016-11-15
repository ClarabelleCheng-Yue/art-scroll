var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: { type: String, unique: true }
});

//create collection of users
var Users = mongoose.model('users', userSchema);


exports.createUser = function(req, res) {
  var newUrl = [req.body.imageUrl];
  //save new user to db
  var newUser = new Users({ 
  	username: req.body.username, 
  	imageUrls: newUrl
  });
  console.log(newUser, 'new user');
  console.log(newUrl, 'new url');

  newUser.save(function(err, saved) {
  	console.log(err, 'err');
  	console.log(saved, 'saved');
  	if (err) {
  	  res.status(500).end();
  	} else {
  	  res.status(200).send(saved);
  	}
  }); 
}

exports.retrieveAll = function (req, res) {
  Users.find({}, function(err, users) {
    if (err) {
      res.status(404).send('Could not get all users: ', err);
    } else {
      res.status(200).send(users);
    }
  });
};