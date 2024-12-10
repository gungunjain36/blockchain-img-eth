import { ethers } from "hardhat";

async function main() {
    const ImageStorage = await ethers.getContractFactory("ImageStorage");
    const contract = await ImageStorage.deploy();

    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
