"use strict";

var _core = require("@iota/core");

console.log("Connecting to IOTA devnet.... :/");

var iota = (0, _core.composeAPI)({
  provider: "https://nodes.devnet.iota.org:443"
});

console.log("Connected to IOTA devnet :) :)");

iota.getNodeInfo().then(function (info) {
  return console.log(info);
}).catch(function (error) {
  console.log("Request Error : " + error.message);
});

var seed = "SBZOFNTMVIQKXRAC9GC9RVBOXWMWQAVTOYFBBZMKNDRQPNJXRYBWVPLEPUYZGGVXULDIELQVWR9KFILYE";

var addresses = iota.getNewAddress(seed, {
  index: 0,
  total: 1,
  security: 2,
  checksum: true,
  returnAll: false
}, function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log(success[0]);
  }
});