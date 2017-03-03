var express = require('express');
var bodyparser = require('body-parser');
var cfenv = require('cfenv');

var app = express();

app.use(express.static('./client'));

require('./api/routes')(app);

var appEnv = cfenv.getAppEnv();

app.listen(appEnv.port, function () {
  console.log('Kieran\'s app is available on' + appEnv.url);
});
