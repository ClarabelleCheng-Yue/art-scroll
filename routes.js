var router = require('express').Router();
var users = require('./db/users.js');
var images = require('./db/images.js');

router.get('/wall', users.retrieveAll);
router.post('/wall', users.createUser);

router.post('/wall/:username', images.addImage);

module.exports = router;