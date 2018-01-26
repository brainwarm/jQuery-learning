var app = require('express')();
var http = require('http').Server(app);
var $ = require('jQuery');

app.get('/', function(req, res) {
    res.sendfile('src/html/1.html');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});