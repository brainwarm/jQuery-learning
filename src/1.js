var app = require('express')();
var http = require('http').Server(app);

var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM('html/1.html');
var $ = require('jquery')(window);
var html = require('html');

$("h1").remove();

app.get('/', function(req, res) {
    var title = $(html).find('title').text();
    console.log(title);

    res.sendfile('html/1.html');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});