var path       = require("path");
var handlebars = require('handlebars');
var prettyjson = require('prettyjson');
var fs         = require ('fs');
var dataJSON;
var returnString;

var net = require('net');
var options = {
  noColor: true
};

var routes = function(router, app) {

  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
    if ('OPTIONS' === req.method) {
      return res.send(200);
    }
    next();
  });

  router.get('/', function(req, res) {
    handlebars.registerPartial('content', fs.readFileSync(__dirname + '/../views/partials/home.html', 'utf8'));
    res.render('layout');
  });

  router.route('/client')
  .get(function(req, res) {
    console.log(dataJSON);
//    res.send(JSON.stringify(dataJSON));
   res.send(returnString);

  })

  .post(function(req, res) {
    var ip   = req.body.ip;
    var port = req.body.port;
    var type = req.body.type;
    console.log(type);
    console.log(ip);
    var client = new net.Socket();

    client.connect(port, ip, function(c) {
      console.log('Connected');
      client.write(type);
    });

    client.on('error', function(ex) {
      console.log("handled error");
      console.log(ex);
    });

    client.on('data', function(data) {
      returnString = data.toString('utf8');
      dataJSON = {"data" : returnString};
      client.end();
    });

    client.on('close', function() {
      console.log('Connection closed');
    });
    res.send();
  });
}

module.exports = routes;
