var express    = require('express'),
    bodyparser = require("body-parser"),
    app        = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname));
// app.set('view engine', 'htm');
app.engine('htm', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.htm');
});

app.listen(process.env.PORT || 8080, function(){
	console.log('server started on port ' + 8080);
});