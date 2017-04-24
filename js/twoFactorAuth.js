module.exports = {

    startAuth: function(accountSid, authToken, twilio, speakeasy) {

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
        return secret;
    },

    authenticateToken: function(speakeasy, token, secret) {
        var verified = speakeasy.totp.verify({
          secret: secret.base32,
          encoding: 'base32',
          token: token
        });

        console.log(verified);
        return verified;
    }
}
