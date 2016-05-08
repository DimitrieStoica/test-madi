var path       = require("path");
var handlebars = require('handlebars');
var prettyjson = require('prettyjson');
var fs         = require ('fs');
var dataJSON;

var close_connection_flag = false;

var net = require('net');
var client = new net.Socket();
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

  router.get('/client/:type', function(req, res) {
    var ip   = "54.191.207.214";
    var port = 8080;
    var type = req.params.type;
    var returnString;

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
console.log(returnString);
     switch(returnString){

        case 'caca':
          close_connection_flag = true;
          flag_raised_by_server = 'caca-flag'
          break;
        case 'Robotino1':
          close_connection_flag = true;
          flag_raised_by_server = 'robot-flag';
          break;
        default:
          // do nothing.
          break;     

      }

console.log(close_connection_flag);
   if (close_connection_flag) {
      console.log("here");
      client.end();
    }

/*
      console.log(data);
      returnString = data.toString('utf8');
      dataJSON = {"data" : returnString};
      client.end();
*/
    });

    client.on('close', function() {
      console.log('Connection closed');
    });

    //res.send(prettyjson.render(dataJSON, options));
    console.log("###############################");
    res.send(returnString);
  });

}

module.exports = routes;
