let firstName: string = "Jane";

let lastName: string = "Smalley";

let currentAge: number = 45;

let isHappy: boolean = false;

console.log(firstName);

console.log("-----Functions-----");

// ES6 arrow function
const fullName = (first: string, last: string): string => {
	return `${first} ${last}`;
};

console.log(fullName("Chayce", "Knaub"));

//using function keyword
function nameAndAge(first: string, last: string, age: number): string {
	return `${first} ${last} is ${age.toString()} years old`;
}
console.log(nameAndAge(firstName, lastName, currentAge));

const happyOrNot = (name: string, happiness: boolean) => {
	return happiness === true ? `${name} is happy.` : `${name} is not happy.`;
};

console.log(happyOrNot(firstName, isHappy));

console.log(happyOrNot("Chayce", false));

//Arrays

const customers = ["John Smith", "Jane Doe", "Marge Simpson"];

customers.forEach((name) => {
	console.log(name.toUpperCase());
});

customers.push("Alexander Hamilton");
