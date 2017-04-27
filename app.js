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

    socket.on('subscribe', function(room) {
        console.log('joining room', room);
        socket.join(room);
    });

	socket.on('send message', function(data){
		io.sockets.in(data.room).emit('new message', data.message);
	});
});

// ================
// START THE SERVER
// ================
server.listen(8080, function(){
	console.log('server started on port ' + 8080);
});


