//OBJECTS AND INTERFACES
const person = {
	name: "Barbara",
	age: 22,
};
// To define the shape of an object you can use the same syntax as with vairables

const person2: { name: string; age: number } = {
	name: "Emily",
	age: 35,
};

// In order to write less code and make code more reusable we can use an interface
// to describe a mandatory structure for an object
interface User {
	name: string;
	age?: number; //optional property
	sayHi(): string;
}

// use interface as type, same syntax as primitives
const user: User = {
	name: "John",
	age: 47,
	sayHi() {
		return "hi " + this.name;
	},
};

const user2: User = {
	name: "Jane",
	sayHi() {
		return `Hi ${this.name}`;
	},
};
console.log(user.sayHi());
