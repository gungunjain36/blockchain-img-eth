import { ethers } from 'ethers';
const contractABI = [
    // Add your contract's ABI here
];
const contractAddress = '0xYourDeployedContractAddress';

async function storeHash(ipfsHash) {
    const provider = new ethers.providers.InfuraProvider('sepolia', process.env.INFURA_API_KEY);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    const tx = await contract.storeHash(ipfsHash);
    await tx.wait();
    console.log('Hash stored on blockchain:', ipfsHash);
}

// Example usage:
storeHash('QmYourIPFSHash');
