

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28; // Change to match Hardhat configuration


contract ImageStorage {
    string public ipfsHash; // Stores the IPFS CID

    // Function to store the IPFS hash
    function storeHash(string memory _ipfsHash) public {
        ipfsHash = _ipfsHash;
    }

    // Function to retrieve the stored IPFS hash
    function getHash() public view returns (string memory) {
        return ipfsHash;
    }
}
