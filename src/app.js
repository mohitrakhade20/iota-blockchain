import { composeAPI } from "@iota/core";

console.log("Connecting to IOTA devnet.... :/");

const iota = composeAPI({
  provider: "https://nodes.devnet.iota.org:443",
});

console.log("Connected to IOTA devnet :) ");

iota
  .getNodeInfo()
  .then((info) => console.log(info))
  .catch((error) => {
    console.log(`Request Error : ${error.message}`);
  });
