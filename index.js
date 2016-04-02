var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});



io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('todoAdded', function(item) {
        io.emit('todoAdded',item);
    });
     socket.on('todoRemoved', function(index) {
        io.emit('todoRemoved',index);
    });
});


http.listen(3000, function() {
    console.log('listening on *:3000');
});
