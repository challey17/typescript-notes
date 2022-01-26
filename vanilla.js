const user = {
	name: "James",
	age: 28,
	isHungry: false,
};

console.log(user.haircolor);

const hungryOrNot = (name, hungry) => {
	return isHungry ? `${name} is hungry` : `${name} is not hungry`;
};

console.log(hungryOrNot("chayce"));
