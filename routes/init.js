//file for only root route

var router = require("express").Router({mergeParams: true});

router.get('/', function(req, res){
	res.render('index.htm');
});

router.post('/hihihi', function(req, res){
	res.render('chat.ejs', {chatroom: req.body.chatroom});
});	

module.exports = router;