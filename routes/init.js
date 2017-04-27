//file for only root route

var router   = require("express").Router({mergeParams: true}),
	password = require('../js/password_gen');

var chatroom;
var genPassword;

router.get('/', function(req, res){
	res.render('index.htm');
});

router.get('/chat/:password', function(req, res){
	res.render('chat.ejs', {chatroom: chatroom, 
							password: genPassword});
});

router.post('/chat', function(req, res){
	chatroom = req.body.chatroom;
	genPassword = password();
	res.redirect('/chat/' + genPassword);
});

module.exports = router;