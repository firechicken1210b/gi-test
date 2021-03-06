
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("my socket server is runing");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('newConnection' + socket.id);
	socket.on('mouse',mouseMsg);

	function mouseMsg(data){
		socket.broadcast.emit('mouse',data);
		//io.sockets.emit('mouse',data); 
		console.log('broadcast: '+data);
	}
}