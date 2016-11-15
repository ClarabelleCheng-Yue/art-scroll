var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
  imageUrls: [{type: String}],
  //provided by mongo
  userid: String
});

//create collection of users
var Images = mongoose.model('images', imageSchema);

exports.addImage = function(req, res) {
  
}