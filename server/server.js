var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static('./client'));

require('./api/routes')(app);

app.listen(3000, function () {
  console.log('Kieran\'s app is available on http://localhost:3000');
});
