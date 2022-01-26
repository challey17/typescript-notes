// COMMON JAVASCRIPT BUGS
const user = {
	name: "James",
	age: 28,
	isHungry: false,
};

//typo error
console.log(user.haircolor);
//
//
//
//LOGIC ERRORS
const hungryOrNot = (name, hungry) => {
	//ternary
	// return hungry ? `${name} is hungry` : `${name} is not hungry`;

	// if/else
	if (hungry) {
		return `${name} is hungry`;
	} else {
		return `${name} is not hungry`;
	}
};
//
//
// WORKING AS EXPECTED
console.log(hungryOrNot("Michelle", true));
console.log(hungryOrNot("Harsh", false));
//NOT WORKING AS EXPECTED
console.log(hungryOrNot("Josh"));

console.log(hungryOrNot("Maggie", 0));
