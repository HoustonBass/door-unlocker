
var express = require('express');
//var bodyParser = require('body-parser');
//var router = require('express').Router();

var app = express();

let port = 3000;

// Middleware
app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/espdata', function(req, res, next) {
	console.log(new Date() + ' got esp request')
	res.send({data: "17"})
})

app.get('/', function(req, res, next) {
	var keys = Object.keys(res);
	var keyString = keys.reduce((a,b) => {
		return b + "\n" + a;
	}, "\n");
    console.log('Sending hello world to: ' + keyString)
	var addrString = getClientAddress(req);
	console.log("Ip was: " + addrString);
console.log();
	//res.removeHeader('Transfer-Encoding');
  //res.removeHeader('X-Powered-By');
	//res.removeHeader('Content-Type');
	//res.removeHeader('Content-Length');
	//res.removeHeader('ETag');
	//res.removeHeader('Date');
	//res.removeHeader('Connection');
	res.send('status=2');
});

getClientAddress = function (req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0]
        || req.connection.remoteAddress;
};

app.listen(port, () => {
  console.log("Server is Running on port " + port);
});
