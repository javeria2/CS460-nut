//file for chat route

var router   = require("express").Router({mergeParams: true});


router.get('/', function(req, res){
	res.render('chat.ejs');
});

module.exports = router;