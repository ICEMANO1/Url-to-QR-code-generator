
import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "fs";
const answer = await input({ message: "Enter url" });
var qr_code = qr.image(answer);
qr_code.pipe(fs.createWriteStream("qr_img2.png"));
fs.writeFile("URL2.txt", answer, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
// Run this file using the command node index.js
// Enter a URL when prompted and press enter.
// Check the directory for a new file called qr_img2.png.
// Open the file to see the QR code image.
// Check the directory for a new file called URL2.txt.
// Open the file to see the URL you entered.
// This code uses the inquirer, qr-image, and fs npm packages.
// The inquirer package is used to get user input.
// The qr-image package is used to create a QR code image.
// The fs module is used to write the QR code image and URL to files.
// The code uses the await keyword to wait for user input.
// The code uses the fs.writeFile method to write the URL to a file.
// The code uses the qr.image method to create a QR code image.
// The code uses the pipe method to write the QR code image to a file.
// The code uses the fs.createWriteStream method to create a write stream.
