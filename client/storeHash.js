import { ethers } from 'ethers';
const contractABI = [
    // Add your contract's ABI here
];
const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';

async function storeHash(ipfsHash) {
    const provider = new ethers.providers.InfuraProvider('sepolia', process.env.INFURA_API_KEY);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    const tx = await contract.storeHash(ipfsHash);
    await tx.wait();
    console.log('Hash stored on blockchain:', ipfsHash);
}

// // Example usage:
// storeHash('QmYourIPFSHash');
