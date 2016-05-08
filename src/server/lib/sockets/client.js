var net = require('net');
var client = new net.Socket();

function connectToServer(type, ip, port, callback){
  var returnString;
  client.connect(port, ip, function() {
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
  });

  client.on('close', function() {
    console.log('Connection closed');
  });
  callback(null, returnString);
     
};

exports.connectToServer = connectToServer;
