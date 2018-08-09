
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
console.log('dirname + dist: ' + __dirname + '/dist/');
app.use(express.static(__dirname + '/dist/'));
console.log('dirname: ' + __dirname);

app.get('/', function(req,res){
   res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
