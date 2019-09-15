const ChallengeCoin = artifacts.require("ChallengeCoin");

module.exports = async function(deployer) {
    await deployer.deploy(ChallengeCoin, "ChallengeCoin", "CHCOIN");
};
