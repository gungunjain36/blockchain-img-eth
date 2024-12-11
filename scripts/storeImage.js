const hre = require("hardhat");
const fs = require("fs");

// Read the PNG file
const imagePath = "static-assets/MSarees12.png"; // Replace with the path to your image
const imageData = fs.readFileSync(imagePath);

// Convert to hexadecimal
const imageHex = imageData.toString("hex");
// console.log("Image Hexadecimal:", imageHex);


async function main() {
  const contractAddress = "0x648b26Ce4136Ea096e20f433FA31Cd357AeD392D"; // Replace with the deployed contract address


  const ImageStorage = await hre.ethers.getContractFactory("ImageStorage");
  const imageStorage = await ImageStorage.attach(contractAddress);

  const tx = await imageStorage.storeHash(imageHex);
  await tx.wait();

  console.log("Image stored on the blockchain!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
