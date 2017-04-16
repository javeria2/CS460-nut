var express = require('express'),
    app     = express();

app.listen(process.env.PORT || 8080, function(){
	console.log('server started on port ' + 8080);
});