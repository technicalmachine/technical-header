var express = require('express');
var app = express();

app.set('views', __dirname + '/lib')
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/lib'))
app.get('/', function(req, res) {
  res.render('test');
});

app.listen(1337);
console.log('Started test server on localhost:1337');
