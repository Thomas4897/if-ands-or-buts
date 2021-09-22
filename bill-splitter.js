const prompt = require("prompt-sync")();

const bill = prompt("How much was the bill: ");
const person1 = prompt("How much did person 1 pay: ");
const person2 = prompt("How much did person 2 pay: ");

const splitBill = bill / 2;
const owes2 = splitBill - person2;
const owes1 = splitBill - person1;

if (person1 === person2) {
	console.log("Nobody owes");
} else if (person1 < splitBill) {
	console.log("Person 2 owes $" + owes1);
} else if (person2 < splitBill) {
	console.log("Person 2 owes $" + owes2);
} else {
	console.log("Error");
}
