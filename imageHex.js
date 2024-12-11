const fs = require("fs");

// Read the PNG file
const imagePath = "static-assets/MSarees12.png"; // Replace with the path to your image
const imageData = fs.readFileSync(imagePath);

// Convert to hexadecimal
const imageHex = imageData.toString("hex");
console.log("Image Hexadecimal:", imageHex);
