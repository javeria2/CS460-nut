//dependencies
var express       = require('express'),
    app           = express(),
    server        = require('http').createServer(app),
    io            = require('socket.io').listen(server),
    init          = require("./routes/init"),
    chat          = require("./routes/chat"),
    speakeasy     = require('speakeasy'),
    twoFactorAuth = require('./js/twoFactorAuth'),
    config        = require('./utils/config'),
	twilio        = require('twilio'),
	cred          = require('./js/cred.js'),
    speakeasy     = require('speakeasy'),
    password      = require('./js/password_gen'),
    crypt         = require("crypto-js");
    var ip = require("ip");



//config
new config(app);

// ==============
// ROUTES BEGIN
// ==============
// homepage, intial route
// app.use(init);
app.use('/chat', chat);

io.sockets.on('connection', function(socket){

    socket.on('subscribe', function(room) {
        console.log('joining room', room);
        socket.join(room);
    });

	socket.on('send message', function(data){
		io.sockets.in(data.room).emit('new message', {message: data.message, username: data.username});
	});
});

// ================
// START THE SERVER
// ================
server.listen(8080, function(){

    //encrypt
    var ciphertext = crypt.AES.encrypt(JSON.stringify({'key': '1234'}), 'secret key 123');
    // var ciphertext = crypt.AES.encrypt('some string', 'secret key 123');
    console.log(ciphertext.toString());

    //decrypt
    var bytes  = crypt.AES.decrypt(ciphertext.toString(), 'secret key 123');
    // var plaintext = bytes.toString(crypt.enc.Utf8);
    // console.log(plaintext);

    var decryptedData = JSON.parse(bytes.toString(crypt.enc.Utf8));
    console.log(decryptedData);

	console.log('server started on port ' + 8080);
});

//=============
// reroutes

var chatroom;
var genPassword;
var user;
var image;

app.get('/', function(req, res){
	res.render('index.htm');
});

app.get('/chat/:password', function(req, res){
	res.render('chat.ejs', { password: req.params.password,
							username: user,
						    image: image});
});

app.post('/chat', function(req, res){

	var btn_pressed = req.body.post_btn;
	user = req.body.username;
	var rand = Math.floor(Math.random() * 10) + 1;
	image = "/images/" + rand + ".png";

	if(btn_pressed == "Join"){
		genPassword = req.body.key;
		var secret = twoFactorAuth.startAuth(cred.accountSid(),
											 cred.authToken(),
											 twilio,
											 speakeasy);
		app.set('gen', genPassword);
		app.set('secret', secret);

		res.redirect('/twofac');
	}else{
		genPassword = password();
		res.redirect('/chat/' + genPassword);
	}
});

app.get('/denied', function(req, res) {
	res.render('denied.htm');
});

app.get('/twofac', function(req, res) {

	res.render('twofac.htm');
});

app.post('/twofac', function(req, res) {

    var secretKey = app.get('secret');
    var genKey = app.get('gen');

    var authenticated = twoFactorAuth.authenticateToken(speakeasy, req.body.token.toString(), secretKey);
    if (authenticated) {
        res.redirect('/chat/' + genKey);
    } else {
        res.redirect('/denied');
    }
});
