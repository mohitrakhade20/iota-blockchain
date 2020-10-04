"use strict";

var _core = require("@iota/core");

console.log("Connecting to IOTA devnet.... :/");

var iota = (0, _core.composeAPI)({
  provider: "https://nodes.devnet.iota.org:443"
});

console.log("Connected to IOTA devnet :) ");

iota.getNodeInfo().then(function (info) {
  return console.log(info);
}).catch(function (error) {
  console.log("Request Error : " + error.message);
});