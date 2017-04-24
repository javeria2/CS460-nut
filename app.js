//dependencies
var express    = require('express'),
    bodyparser = require("body-parser"),
    app        = express(),
    server     = require('http').createServer(app),
    io         = require('socket.io').listen(server),
    init       = require("./routes/init"),
    chat       = require("./routes/chat"),
    speakeasy  = require('speakeasy'),
    twoFactorAuth = require('./js/twoFactorAuth');

//config
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
app.engine('htm', require('ejs').renderFile);

// ==============
// ROUTES BEGIN
// ==============
// homepage, intial route
app.use(init);
app.use('/chat', chat);

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', encrypt_msg(data));
		console.log(data);
	});
});

/**
Shuffler
http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
**/
function encrypt_msg(msg){
	var shuffledWord = '';
	var charIndex = 0;
	msg = msg.split('');
	while (msg.length > 0) {
		charIndex = msg.length * Math.random() << 0;
		shuffledWord += msg[charIndex];
		msg.splice(charIndex, 1);
	}
	return shuffledWord;
}

// ================
// START THE SERVER
// ================
server.listen(8080, function(){
	console.log('server started on port ' + 8080);
});


