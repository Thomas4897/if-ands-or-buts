const prompt = require("prompt-sync")();

const bill = Number(prompt("How much was the bill: "));
const person1 = Number(prompt("How much did person 1 pay: "));
const person2 = Number(prompt("How much did person 2 pay: "));
const person3 = Number(prompt("How much did person 3 pay: "));

const amountOwed = bill - person1 - person2 - person3;

const splitBill = bill / 3;

const x = person1 - splitBill;
const y = person2 - splitBill;
const z = person3 - splitBill;

if (person1 === person2 && person1 === person3 && amountOwed === 0) {
	console.log("Nobody owes");
} else if (person1 === 0 && person2 === 0 && amountOwed === 0) {
	console.log("Person 1 owes Person 3 $50");
	console.log("Person 2 owes Person 3 $50");
} else if (person2 === 0 && person3 === 0 && amountOwed === 0) {
	console.log("Person 2 owes Person 1 $50");
	console.log("Person 3 owes Person 1 $50");
} else if (person1 === 0 && person3 === 0 && amountOwed === 0) {
	console.log("Person 1 owes Person 2 $50");
	console.log("Person 3 owes Person 2 $50");
} else if (
	person1 < splitBill &&
	(person2 >= splitBill || person3 >= splitBill) &&
	amountOwed === 0
) {
	console.log("Person 1 owes Person 2 $" + y);
	console.log("Person 1 owes Person 3 $" + z);
} else if (
	person2 < splitBill &&
	(person1 >= splitBill || person3 >= splitBill) &&
	amountOwed === 0
) {
	console.log("Person 2 owes Person 1 $" + x);
	console.log("Person 2 owes Person 3 $" + z);
} else if (
	person3 < splitBill &&
	(person1 >= splitBill || person2 >= splitBill) &&
	amountOwed === 0
) {
	console.log("Person 3 owes Person 1 $" + x);
	console.log("Person 3 owes Person 2 $" + y);
} else {
	console.log("Error");
}
