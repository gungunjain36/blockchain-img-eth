async function main() {
    // Get the deployer's account (the one who deploys the contract)
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory for the correct contract name
    const Contract = await ethers.getContractFactory("ImageStorage");  // Change this to match your contract's name

    // Deploy the contract
    const contract = await Contract.deploy();
    
    // Log the contract object to check if it's correct
    console.log("Contract object:", contract);

    // Log the contract address
    console.log("Contract deployed to:", contract.address);

    // Wait for the contract to be mined (important to ensure it is deployed)
    await contract.deployed();  // This should work now if the contract is deployed correctly

    // Log that the contract was deployed successfully
    console.log("Contract deployed successfully.");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
