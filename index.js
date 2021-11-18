const CHAINS = require("./chains.json");

module.exports = {
  getChain(id) {
    return CHAINS[id];
  },
};
