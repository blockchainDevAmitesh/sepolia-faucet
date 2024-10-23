//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.27;

contract faucet {
    
    constructor() payable {
        require(msg.value == 1000000000000000000, "Must send 1 ETH to initialize the contract");
    }

    // returns contract balance
    function getBalance() external view returns(uint) {
        return address(this).balance;
    }

    // Withdraw function, allowing users to withdraw up to 0.25 ETH
    function withdraw(uint _amount) external {
        // users can only withdraw a maximum of .25 ETH at a time
        require(_amount <= 250000000000000000, "Exceeds maximum withdraw limit");
        require(address(this).balance >= _amount, "Contract has insufficient balance");
        payable(msg.sender).transfer(_amount);
    }

    // fallback function to receive ETH
    receive() external payable {}
}