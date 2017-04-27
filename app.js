//dependencies
var express       = require('express'),
    app           = express(),
    server        = require('http').createServer(app),
    io            = require('socket.io').listen(server),
    init          = require("./routes/init"),
    chat          = require("./routes/chat"),
    speakeasy     = require('speakeasy'),
    twoFactorAuth = require('./js/twoFactorAuth'),
    config        = require('./utils/config');

//config
new config(app);

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


