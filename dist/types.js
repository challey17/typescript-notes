console.log("-----Primitive Types-----");
var firstName = "Jane";
var lastName = "Smalley";
var currentAge = 45;
var isHappy = false;
console.log(firstName);
//
//
//
//
//
console.log("-----Functions-----");
// ES6 arrow function
var fullName = function (first, last) {
    return "".concat(first, " ").concat(last);
};
console.log(fullName("Chayce", "Knaub"));
//
//
//
//
//using function keyword
function nameAndAge(first, last, age) {
    return "".concat(first, " ").concat(last, " is ").concat(age.toString(), " years old");
}
console.log(nameAndAge(firstName, lastName, currentAge));
//
//
//
//
//
var happyOrNot = function (name, happiness) {
    return happiness === true ? "".concat(name, " is happy.") : "".concat(name, " is not happy.");
};
console.log(happyOrNot(firstName, isHappy));
console.log(happyOrNot("Chayce", false));
//
//
//
//
//
//Arrays
var customers = ["John Smith", "Jane Doe", "Marge Simpson"];
var numArray = [4, 56, 78, 32];
customers.forEach(function (name) {
    console.log(name.toUpperCase());
});
customers.push("Alexander Hamilton");
//
//
//
//
// TUPLES , an array with a specific mandatory structure
var nameAge = ["Sally", 10];
//Error
//nameAge = [10, "Sally"]
console.log(nameAge);
//
//
//
//
// UNIONS
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });
