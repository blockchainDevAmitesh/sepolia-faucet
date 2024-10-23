# Faucet Contract Project

This project implements a simple Ethereum Sepolia Faucet contract using Solidity and Hardhat. The Faucet allows users to withdraw a limited amount of ETH at once and ensures that the contract is funded upon deployment. It includes automated tests for contract functionality and integrates Hardhat Ignition for deployment management.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Deployment](#deployment)
- [Testing Scenarios](#testing-scenarios)
- [License](#license)

## Overview

The `Faucet.sol` contract allows users to:
- Withdraw a maximum of 0.25 ETH at a time.
- Check the contract's balance.
- Send ETH sent to the contract.

The contract is initialized with exactly 1 ETH at deployment to provide initial funds.

## Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Hardhat](https://hardhat.org/getting-started/)
- [Ethers.js](https://docs.ethers.io/v5/getting-started/)
- [Chai](https://www.chaijs.com/)
- [Hardhat Ignition](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-ignition)
- [Alchemy API](https://dashboard.alchemy.com/)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/faucet-contract
   cd faucet-contract

2. Install dependencies:
   ```bash
   npm install

3. Do required changes in .env

4. Compile the contract:
   ```bash
   npx hardhat compile

## Running Tests

1. To ensure that the contract works as expected, run the test suite:

   ```bash
   npx hardhat test
2. The test case cover:

   - Successful withdrawal of 0.25 ETH.
   - Failed withdrawal attempts exceeding 0.25 ETH.
   - Verifying the contract can receive ETH.

## Deployment

This project uses Hardhat Ignition for deployment management. To deploy the contract with an initial funding of 1 ETH:

   - Update your Hardhat network configuration with a funded account.
   - Run the deployment script:
     ```bash
     npx hardhat node
     // Open a new terminal and use any one 
     1. npx hardhat ignition deploy ./ignition/modules/Faucet.js --network localhost
     or
     2. npx hardhat ignition deploy ./ignition/modules/Faucet.js --network <your-network>
     

## Testing Scenarios

The tests are located in test/Faucet.js and include:

   - Withdraw Success: Allows the user to withdraw 0.25 ETH.
   - Withdraw Failure: Ensures withdrawals exceeding 0.25 ETH are rejected.
   - Receive ETH: Verifies that the contract can receive ETH and reflect it in the balance.

## License

- This project is licensed under the MIT License - see the [LICENSE](https://github.com/blockchainDevAmitesh/sepolia-faucet/blob/main/LICENSE)
