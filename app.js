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
    crypt         = require("crypto-js");
    var ip = require("ip");



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


