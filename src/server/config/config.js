var config     = module.exports;
var currentENV = process.env.NODE_ENV || "development";
var PRODUCTION = process.env.NODE_ENV === "production";
var TEST       = process.env.NODE_ENV === "test";

config.express = {
  ip:   process.env.VCAP_APP_HOST || "127.0.0.1",
  port: process.env.PORT || 3000
};

if (PRODUCTION) {
  config.express.ip   = process.env.VCAP_APP_HOST || "0.0.0.0";
  config.express.port = process.env.VCAP_APP_PORT || 80;
};

if (TEST) {
  config.express.ip   = process.env.VCAP_APP_HOST || "localhost";
  config.express.port = process.env.EXPRESS_PORT || 4657;
};

config.currentENV = currentENV;
