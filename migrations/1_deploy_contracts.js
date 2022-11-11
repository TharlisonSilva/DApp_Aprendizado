const Storage = artifacts.require("Honest");

module.exports = function(deployer) {
  deployer.deploy(Storage);
};
