var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hola mundo!');
})

app.listen(3000, function(err){
  if (err) return console.log('No se peude inciar el servidor'), process.exit(1);
  console.log('Escuchando el puerto 3000');
})
