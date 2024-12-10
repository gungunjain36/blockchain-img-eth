async function getHash() {
    const provider = new ethers.providers.InfuraProvider('sepolia', process.env.INFURA_API_KEY);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    const ipfsHash = await contract.getHash();
    console.log('IPFS Hash:', ipfsHash);
    return ipfsHash;
}
