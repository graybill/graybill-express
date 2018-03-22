var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, resp) {
  //resp.send('Hello from Digital Ocean and Express!');
  resp.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, function () {
  console.log('App is listening on port 3000...');
});
