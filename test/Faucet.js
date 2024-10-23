const { expect } = require('chai');
const { ethers } = require('hardhat');
const { loadFixture } = require('@nomicfoundation/hardhat-toolbox/network-helpers');

describe("Faucet contract", function () {
  // Using Load Fixture to avoid code duplication:
  async function deployFaucetFixture() {
    const [ add1 ] = await ethers.getSigners();
    const faucet = await ethers.deployContract("faucet", [], {
      value: ethers.parseEther("1.0"),  // Sending 1 ETH during deployment
    });
    await faucet.waitForDeployment();
    return{ add1, faucet };
  };

  // Checking for successful withdrawal:
  describe("Withdraw pass", function () {
    it("Should allow user to withdraw 0.25 ETH", async function () {
      const { add1, faucet } = await loadFixture(deployFaucetFixture);
      const withdrawAmount = ethers.parseEther("0.25");
      expect(await faucet.connect(add1).withdraw(withdrawAmount)).to.changeEtherBalance(add1, withdrawAmount);
    });
  });

  // Checking for withdrawal rejection:
  describe("Withdraw fail", function () {
    it("Should fail if withdraw amount is more than 0.25 ETH", async function () {
      const { add1, faucet } = await loadFixture(deployFaucetFixture);
      const withdrawAmount = ethers.parseEther("1.0");
      expect(await faucet.connect(add1).withdraw(withdrawAmount)).to.be.revertedWith("Exceeds maximum withdraw limit");
    });
  });

  // Checking for ETH received:
  describe("ETH received", function () {
    it("Should allow the contract to receive ETH", async function () {
      const { add1, faucet } = await loadFixture(deployFaucetFixture);
      const sendAmount = ethers.parseEther("1.0");
      const balanceBefore = await faucet.getBalance();
      console.log(typeof(balanceBefore));

      await add1.sendTransaction({
        to: faucet.target,
        value: sendAmount,
      });

      expect(await faucet.getBalance()).to.equal(balanceBefore + sendAmount);
    });
  });
});