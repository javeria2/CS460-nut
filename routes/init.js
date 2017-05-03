//file for only root route

// var router   = require("express").Router({mergeParams: true}),
// 	password = require('../js/password_gen'),
//     twoFactorAuth = require('../js/twoFactorAuth'),
// 	twilio = require('twilio'),
// 	cred = require('../js/cred.js'),
//     speakeasy     = require('speakeasy');
//
//
//
// var chatroom;
// var genPassword;
// var user;
// var image;
//
// router.get('/', function(req, res){
// 	res.render('index.htm');
// });
//
// router.get('/chat/:password', function(req, res){
// 	res.render('chat.ejs', { password: genPassword,
// 							username: user,
// 						    image: image});
// });

// router.post('/chat', function(req, res){
//
// 	var btn_pressed = req.body.post_btn;
// 	user = req.body.username;
// 	var twoFactorAuthKey = req.body.twoFactor;
// 	var rand = Math.floor(Math.random() * 10) + 1;
// 	image = "/images/" + rand + ".png";
//
// 	if(btn_pressed == "Join"){
// 		genPassword = req.body.key;
// 		var secret = twoFactorAuth.startAuth(cred.accountSid(),
// 											 cred.authToken(),
// 											 twilio,
// 											 speakeasy);
// 		router.set('gen', genPassword);
// 		router.set('secret', secret);
//
// 		res.redirect('/gen');
// 	}else{
// 		genPassword = password();
// 		res.redirect('/chat/' + genPassword);
// 	}
// });

// router.get('/denied', function(req, res) {
// 	res.render('denied.htm');
// });
//
// router.get('/twofac', function(req, res) {
// 	res.render('twofac.htm', {genKey: router.get('gen'), secretKey: router.get('secret')});
// 	console.log(genKey);
// 	console.log(secretKey);
// });

// app.post('/chat', function(req, res){
//
// 	var btn_pressed = req.body.post_btn;
// 	user = req.body.username;
// 	var twoFactorAuthKey = req.body.twoFactor;
// 	var rand = Math.floor(Math.random() * 10) + 1;
// 	image = "/images/" + rand + ".png";
//
// 	if(btn_pressed == "Join"){
// 		genPassword = req.body.key;
// 		var secret = twoFactorAuth.startAuth(cred.accountSid(),
// 											 cred.authToken(),
// 											 twilio,
// 											 speakeasy);
// 		app.set('gen', genPassword);
// 		app.set('secret', secret);
//
// 		res.redirect('/twofac');
// 	}else{
// 		genPassword = password();
// 		res.redirect('/chat/' + genPassword);
// 	}
// });
//
// app.get('/denied', function(req, res) {
// 	res.render('denied.htm');
// });
//
// app.get('/twofac', function(req, res) {
//     var genKey = app.get('gen');
//     var secretKey = app.get('secret');
//     console.log(genKey);
// 	console.log(secretKey);
//
// 	res.render('twofac.htm');
// });

// module.exports = router;
