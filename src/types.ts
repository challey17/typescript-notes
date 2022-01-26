console.log("-----Primitive Types-----");
let firstName: string = "Jane";

let lastName: string = "Smalley";

let currentAge: number = 45;

let isHappy: boolean = false;

console.log(firstName);
//
//
//
//
//
console.log("-----Functions-----");

// ES6 arrow function
const fullName = (first: string, last: string): string => {
	return `${first} ${last}`;
};

console.log(fullName("Chayce", "Knaub"));
//
//
//
//
//using function keyword
function nameAndAge(first: string, last: string, age: number): string {
	return `${first} ${last} is ${age.toString()} years old`;
}
console.log(nameAndAge(firstName, lastName, currentAge));
//
//
//
//
//
const happyOrNot = (name: string, happiness: boolean) => {
	return happiness === true ? `${name} is happy.` : `${name} is not happy.`;
};

console.log(happyOrNot(firstName, isHappy));

console.log(happyOrNot("Chayce", false));
//
//
//
//
//
//Arrays

const customers: string[] = ["John Smith", "Jane Doe", "Marge Simpson"];
const numArray: number[] = [4, 56, 78, 32];

customers.forEach((name) => {
	console.log(name.toUpperCase());
});

customers.push("Alexander Hamilton");
//
//
//
//
// TUPLES , an array with a specific mandatory structure
let nameAge: [string, number] = ["Sally", 10];

//Error
//nameAge = [10, "Sally"]
console.log(nameAge);
//
//
//
//
// UNIONS

function printId(id: number | string) {
	console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });
