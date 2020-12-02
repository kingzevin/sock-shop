(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  "http://172.17.0.1:4083",
    tagsUrl:       "http://172.17.0.1:4083/tags",
    cartsUrl:      "http://172.17.0.1:4084/carts",
    ordersUrl:     "http://172.17.0.1:4085",
    customersUrl:  "http://172.17.0.1:4089/customers",
    addressUrl:    "http://172.17.0.1:4089/addresses",
    cardsUrl:      "http://172.17.0.1:4089/cards",
    loginUrl:      "http://172.17.0.1:4089/login",
    registerUrl:   "http://172.17.0.1:4089/register",
    // catalogueUrl:  util.format("http://catalogue%s", domain),
    // tagsUrl:       util.format("http://catalogue%s/tags", domain),
    // cartsUrl:      util.format("http://carts%s/carts", domain),
    // ordersUrl:     util.format("http://orders%s", domain),
    // customersUrl:  util.format("http://user%s/customers", domain),
    // addressUrl:    util.format("http://user%s/addresses", domain),
    // cardsUrl:      util.format("http://user%s/cards", domain),
    // loginUrl:      util.format("http://user%s/login", domain),
    // registerUrl:   util.format("http://user%s/register", domain),
  };
}());
