//dependencies
var express    = require('express'),
    bodyparser = require("body-parser"),
    app        = express(),
    server     = require('http').createServer(app),
    io         = require('socket.io').listen(server),
    init       = require("./routes/init"),
    chat       = require("./routes/chat"),
    twilio     = require('twilio'),
    speakeasy  = require('speakeasy'),
    // credential = require('./cred'),
    twoFactorAuth = require('./twoFactorAuth.js');

//config
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.engine('htm', require('ejs').renderFile);

// ==============
// ROUTES BEGIN
// ==============
// homepage, intial route
app.use(init);
app.use('/chat', chat);

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});

// ================
// START THE SERVER
// ================
server.listen(8080, function(){
	console.log('server started on port ' + 8080);
});


