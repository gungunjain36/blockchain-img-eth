async function main() {
    // Get the deployer's account
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory
    const Contract = await ethers.getContractFactory("ImageStorage");

    // Deploy the contract
    const contract = await Contract.deploy();

    // Wait for the deployment to complete
    await contract.deployed();

    // Log the contract address
    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error deploying contract:", error);
        process.exit(1);
    });
