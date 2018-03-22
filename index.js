var express = require('express');
var app = express();

app.get('/', function (req, resp) {
  resp.send('Hello from Digital Ocean and Express!');
});

app.listen(3000, function () {
  console.log('App is listening on port 3000...');
});
