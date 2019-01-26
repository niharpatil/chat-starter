const express = require('express');  
const app = express();  
const server = require('http').createServer(app);  
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public')); 

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function(){
  console.log('server running')
})