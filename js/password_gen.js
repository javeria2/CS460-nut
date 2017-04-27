var generator = require('generate-password');

module.exports = function createPassword() {
	return generator.generate({
    	length: 20,
    	numbers: true,
    	symbols: true,
    	strict: true
	}).replace('/', '');
}