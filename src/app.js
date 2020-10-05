import { composeAPI } from "@iota/core";

console.log("Connecting to IOTA devnet.... :/");

const iota = composeAPI({
  provider: "https://nodes.devnet.iota.org:443",
});

console.log("Connected to IOTA devnet :) :)");

iota
  .getNodeInfo()
  .then((info) => console.log(info))
  .catch((error) => {
    console.log(`Request Error : ${error.message}`);
  });

let seed =
  "SBZOFNTMVIQKXRAC9GC9RVBOXWMWQAVTOYFBBZMKNDRQPNJXRYBWVPLEPUYZGGVXULDIELQVWR9KFILYE";

let addresses = iota.getNewAddress(
  seed,
  {
    index: 0,
    total: 1,
    security: 2,
    checksum: true,
    returnAll: false,
  },
  (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success[0]);
    }
  }
);
