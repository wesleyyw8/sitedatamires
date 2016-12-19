var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/ui')); 
app.use(express.static(__dirname + '/ui/views')); 
app.get('/', function(request,response){
  response.sendFile(__dirname + '/ui/views/index.html');
});

app.listen(port, function(){
  console.log('funcionando na porta: '+port);
});