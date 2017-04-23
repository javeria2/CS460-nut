var twilio = require('twilio');
var accountSid = 'AC34479a70c954123a2cb3b8ad7db79b57'; // Your Account SID from www.twilio.com/console
var authToken = '18b312b63cc79ba1ff22f73e5477bfd0';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
console.log("hellooo");
client.messages.create({
    body: 'Hello from Node',
    to: '+18057980216',  // Text this number
    from: '+180530352981' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});
