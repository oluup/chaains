const CHAINS = require("./chains.json");

exports = {
  getChain(id) {
    return CHAINS[id];
  },
};
