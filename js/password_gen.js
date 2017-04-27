var generator = require('generate-password');

var password = generator.generate({
    length: 20,
    numbers: true,
    symbols: true,
    strict: true
});

// console.log(password);

module.exports = password;