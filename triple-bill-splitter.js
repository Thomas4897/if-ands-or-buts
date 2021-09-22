const prompt = require("prompt-sync")();

const bill = prompt("How much was the bill: ");
const person1 = prompt("How much did person 1 pay: ");
const person2 = prompt("How much did person 2 pay: ");
const person3 = prompt("How much did person 3 pay: ");

const splitBill = bill / 3;
const owes1 = splitBill - person1;
const owes2 = splitBill - person2;
const owes3 = splitBill - person3;

if (person1 === splitBill && person2 === splitBill && person3 === splitBill) {
	console.log("Nobody owes");
} else if (person1 < splitBill) {
	if (person2 > splitBill) {
		const p1OwesP2 = person2 - splitBill;
		console.log("Person 1 owes person 2 $" + p1OwesP2);
	} else if (person3 > splitBill) {
		const p1OwesP3 = person3 - splitBill;
		console.log("Person 1 owes person 3 $" + p1OwesP3);
	}
} else if (person2 < splitBill) {
	console.log("Person 2 owes $" + owes2);
} else if (person3 < splitBill) {
	console.log("Person 3 owes $" + owes3);
} else {
	console.log("Error");
}
