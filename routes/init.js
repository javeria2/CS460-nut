//file for only root route

var router = require("express").Router({mergeParams: true});

router.get('/', function(req, res){
	res.render('index.htm');
});

module.exports = router;