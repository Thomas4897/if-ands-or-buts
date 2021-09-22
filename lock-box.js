const prompt = require("prompt-sync")();

const pinCode = "1234";

const passcode = prompt("Please enter the Passcode: ");

if (passcode === pinCode) {
	console.log("success");
} else {
	console.log("faliure");
}
