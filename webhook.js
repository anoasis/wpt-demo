var express = require('express'),  
    http = require('http'),
    app = express();

app.set('port', process.env.PORT || 8080);

app.get('/hooks/:env/:id', function (req, res) {  
    var spawn = require('child_process').spawn,
        deploy = spawn('node', [req.params.env+"/"+req.params.id]);
    var result = "";
    deploy.stdout.on('data', function (data) {
        console.log(req.params.hook+'=>'+data);
        result = ''+data;
    });

    deploy.on('close', function (code) {
        console.log('Child process exited with code ' + req.params.id);
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify(result));
    });
});

http.createServer(app).listen(app.get('port'), function(){  
  console.log('Express server listening on port ' + app.get('port'));
});
