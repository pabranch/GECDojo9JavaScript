//OO JS
var Mammal = function(name) {
	this.name = name;
}
// // things that don't need to be set in the constructor should be added to the constructor's prototype property.
Mammal.prototype.sayHi = function() {
	return "Hello, my name is " + this.name;
}
describe("Basic Object Oriented javascript", function() {
	it("should say hi", function() {
		var eric = new Mammal("Eric");
		expect(__).toEqual("Hello, my name is Eric");
	});
});
// add another function to the Mammal 'type' that uses the sayHi function
Mammal.prototype.favouriteSaying = function() {
	return this.name + "'s favourite saying is " + this.sayHi();
}

describe("Dynamically Added Methods in Javascript", function() {
	it("Should have a favorite saying", function() {
		var bobby = new Mammal("Bobby");
		expect(bobby.favouriteSaying()).toEqual(__);
	});
});

describe("Dynamically Added Methods in Javascript", function() {
	it("Brand New Methods", function() {
		var paul = new Mammal("Paul");
		Mammal.prototype.numberOfLettersInName = function() {
			return this.name.length
		};
		expect(paul.numberOfLettersInName()).toEqual(__);
	});
});

describe("Dynamically Added Methods to Built-in Objects", function() {
	it("Arrays should print pretty like", function() {
		var items = ["bananna", "apple", "pear", "grape"]
		expect(items.prettyPrint()).toEqual("bananna\napple\npear\ngrape");
	});
});
