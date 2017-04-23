var express    = require('express'),
    bodyparser = require("body-parser"),
    app        = express(),
    server     = require('http').createServer(app),
    io         = require('socket.io').listen(server);

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.engine('htm', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.htm');
});

app.get('/chat', function(req, res){
	res.render('chat.htm');
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});

server.listen(8080, function(){
	console.log('server started on port ' + 8080);
});
