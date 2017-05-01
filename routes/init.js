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
	res.render('chat.ejs', { password: genPassword,
							username: user,
						    image: image});
});

router.post('/chat', function(req, res){

	console.log(":helllooooooo???");
	var btn_pressed = req.body.post_btn;
	user = req.body.username;
	var rand = Math.floor(Math.random() * 10) + 1;
	image = "/images/" + rand + ".png";
	console.log("hello there");

	if(btn_pressed == "Join"){
		console.log("joined");
		var nutsack_key = req.body.key;
		console.log(nutsack_key);
		res.redirect('/chat/' + nutsack_key);
	}else{
		console.log("created");
		genPassword = password();
		res.redirect('/chat/' + genPassword);
	}
});

router.get('/denied', function(req, res) {
		res.render('denied.htm');
});

module.exports = router;
