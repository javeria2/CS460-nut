module.exports = {
    // accountSid: sid from cred.js used for twilio api
    // authToken: token from cred.js used for twilio api
    // twilio: twilio module passed in from main app
    // speakeasy: speakeasy 2factorauth module passed in from main app
    startAuth: function(accountSid, authToken, twilio, speakeasy, phone) {

        var client = twilio(accountSid, authToken);
        var secret = speakeasy.generateSecret({length: 20});

        var token = speakeasy.hotp({
          secret: secret.base32,
          encoding: 'base32',
          counter: 123
        });

        client.sendMessage({
            body: token,
            to: phone.toString(),
            from: "+18053035298"
        });

        console.log(token);
        console.log(secret);
        return secret;
    },

    authenticateToken: function(speakeasy, token, secret) {
        console.log("---------");
        console.log(token);
        console.log(secret);
        console.log("---------");

        var verified = speakeasy.hotp.verify({
          secret: secret.base32,
          encoding: 'base32',
          token: token,
          counter: 123
        });

        console.log(verified);
        return verified;
    }
};
