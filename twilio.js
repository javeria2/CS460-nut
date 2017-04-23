var twilio = require('twilio');
var accountSid = 'AC34479a70c954123a2cb3b8ad7db79b57'; // Your Account SID from www.twilio.com/console
var authToken = '18b312b63cc79ba1ff22f73e5477bfd0';   // Your Auth Token from www.twilio.com/console

var client = twilio(accountSid, authToken);

client.sendMessage({
    body: "All in the game, yo",
    to: "+18057980216",
    from: "+18053035298"
});
