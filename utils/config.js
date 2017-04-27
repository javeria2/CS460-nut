var express     = require('express'),
	bodyparser  = require("body-parser");

class Config{
	
	constructor(app){
		app.use(bodyparser.urlencoded({extended: true}));
		app.use(express.static(__dirname + '/../public'));
		app.use(express.static(__dirname + '/../js'));
		app.engine('htm', require('ejs').renderFile);
	}
}
module.exports = Config;