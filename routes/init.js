//file for only root route

var router   = require("express").Router({mergeParams: true}),
	password = require('../js/password_gen');

var chatroom;
var genPassword;
var user;
var image;

router.get('/', function(req, res){
	res.render('index.htm');
});

router.get('/chat/:password', function(req, res){
	res.render('chat.ejs', {chatroom: chatroom,
							password: genPassword,
							username: user,
						    image: image});
});

router.post('/chat', function(req, res){
	chatroom = req.body.chatroom;
	user = req.body.username;
	var rand = Math.floor(Math.random() * 10) + 1;
	image = "/images/" + rand + ".png";
	genPassword = password();
	res.redirect('/chat/' + genPassword);
});

router.get('/denied', function(req, res) {
		res.render('denied.htm');
});

module.exports = router;
