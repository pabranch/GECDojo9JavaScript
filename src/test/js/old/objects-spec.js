describe("Objects", function() {
	it("should should have a name and an age", function() {
		var person = {
		name : __,
			age : __
		};
		expect(person.name).toEqual("Amory Blaine");
		expect(person.age).toEqual(102);
	});
	
	it("should should have a magic name and a magic age", function() {
		var person = {}
		person.name = __;
		person.age = __;
		expect(person.name).toEqual("Amory Blaine");
		expect(person.age).toEqual(102);
	});
	
	it("should should have a strange magic name and a strange magic age", function() {
		var person = {}
		person["name"]=__;
		person["age"]=__;
		expect(person.name).toEqual("Amory Blaine");
		expect(person.age).toEqual(102);
	});
	
	it("functions are objects too!", function() {
			
		var onlyLikesOddNumbers = function(arg){};
		expect(functionApplier(onlyLikesOddNumbers,[1,2,3,4,5,6,7,8,9,10])).toEqual([1,3,5,7,9]);
	});
		
	it("functions have their own methods", function() {
			
		var onlyLikesShortString = function(arg){};
		expect(onlyLikesShortString.call({},["a","aa","aaa","aaaa","aaaaa","aaaaaa"])).toEqual(["a","aa","aaa"]);
	});
	
	function functionApplier(func,arg)
	{
		return func(arg);
	}
});