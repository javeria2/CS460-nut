var express    = require('express'),
    bodyparser = require("body-parser"),
    app        = express(),
    server     = require('http').createServer(app),
    io         = require('socket.io').listen(server);

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.engine('htm', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.htm');
});

app.get('/chat', function(req, res){
	res.render('chat.htm');
});

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

server.listen(8080, function(){
	console.log('server started on port ' + 8080);
});
