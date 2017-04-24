var generator = require('generate-password');

var password = generator.generate({
    length: 20,
    numbers: true
});

console.log(password);