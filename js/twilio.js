var twilio      = require('twilio');
var speakeasy   = require('speakeasy');
var credential  =  require('./auth');

var accountSid = credential.accountSid(); // Your Account SID from www.twilio.com/console
var authToken = credential.authToken();   // Your Auth Token from www.twilio.com/console

var client = twilio(accountSid, authToken);

var secret = speakeasy.generateSecret({length: 20});

var token = speakeasy.totp({
  secret: secret.base32,
  encoding: 'base32',
});

client.sendMessage({
    body: token,
    to: "+18057980216",
    from: "+18053035298"
});

console.log(token);

var verified = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: 'base32',
  token: token
});

console.log(verified);
