describe("unbound variables are dangerous", function() {
	it("bound variables are safe, globals not so much", function() {
		var temp = 1;
		expect(temp).toEqual(__);
		temp2 = 1;
		expect(window.temp2).toEqual(__);
	});
});
function unbound() {
	return this;
}

function FirstObject() {
}

FirstObject.prototype.bound = function() {
	return this;
}
describe("This is not the this you are looking for.", function() {
	it("unbound functions have no this", function() {
		expect(unbound()).toEqual(__);
	});
	it("methods are just bound functions.", function() {
		var anObject = new FirstObject()
		expect(anObject.bound()).toEqual(__);
	});
	it("but methods can be repurposed", function() {
		var anObject = new FirstObject()
		expect(anObject.bound.apply(window)).toEqual(__);
	});
	it("unbound functions can become methods", function() {
		var anObject = new FirstObject()
		expect(unbound.apply(anObject)).toEqual(__);
	});
});
