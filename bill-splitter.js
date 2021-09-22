const prompt = require("prompt-sync")();

const bill = Number(prompt("How much was the bill: "));
const person1 = Number(prompt("How much did person 1 pay: "));
const person2 = Number(prompt("How much did person 2 pay: "));

const amountOwed = bill - person1 - person2;

const splitBill = bill / 2;
const x = person1 - splitBill;
const y = person2 - splitBill;

if (person1 === person2 && amountOwed === 0) {
	console.log("Nobody owes");
} else if (person1 < splitBill && amountOwed === 0) {
	console.log("Person 1 owes Person 2 $" + y);
} else if (person2 < splitBill && amountOwed === 0) {
	console.log("Person 2 owes Person 1 $" + x);
} else {
	console.log("Error");
}
