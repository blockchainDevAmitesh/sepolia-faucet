const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Faucet", (m) => {
  // Specifying the amount of ETH to send with the deployment
  const initialFunding = ethers.parseEther("1.0");

  // Deploy the faucet contract with the initial funding
  const faucet = m.contract("faucet", [], {
    value: initialFunding, // Passing the funding value here
  });
  return { faucet };
});
