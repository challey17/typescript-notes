//OBJECTS AND INTERFACES
var person = {
    name: "Barbara",
    age: 22
};
// To define the shape of an object you can use the same syntax as with vairables
var person2 = {
    name: "Emily",
    age: 35
};
// use interface as type, same syntax as primitives
var user = {
    name: "John",
    age: 47,
    sayHi: function () {
        return "hi " + this.name;
    }
};
var user2 = {
    name: "Jane",
    sayHi: function () {
        return "Hi ".concat(this.name);
    }
};
console.log(user.sayHi());
