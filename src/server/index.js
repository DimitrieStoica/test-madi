var express     = require('express');
var config      = require('./config/config');
var app         = express();
var router      = express.Router();
var path        = require("path");
var handlebars  = require('handlebars');
var consolidate = require('consolidate');

app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/lib/views');

global.__base = path.resolve(__dirname, '../');
app.use(express.static(__dirname + '/../client/'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.disable('etag');

require('./lib/routes/home')(router,app);

app.use('/', router);

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = app;
