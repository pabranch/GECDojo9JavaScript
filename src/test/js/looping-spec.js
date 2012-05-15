describe("Looping", function() {

	var __ = null;
	
	it("should loop through an array", function(){
		var numbers = ["1","2","3","4","5","6","7","8","9","10"],
		numberString = "";
		for(var i = __ ;i < __; __){
			
		}
		expect( numberString ).toEqual("12345678910");
	});
	
	it("should loop through contents of an object", function(){
		var keysInDict="",
		valuesInDict="", 
		key,
		dict = {a:'apple',b:'banana',c:'cherry'} ;
		
		//remember all varibles you need have already been declared!
		for(__ in __ ){
			
		}
		
		expect( keysInDict ).toEqual("a, b, c");
		expect( valuesInDict ).toEqual("apple, banana, cherry");
	});
	
	it("should loop through contents of an array using forEach", function(){
		var allNumbers= [1,2,3,4,5,6,7,8,9,10],
		evens= [],
		odds = []; 
		
		allNumbers.__;
		
		expect( evens ).toEqual([2,4,6,8,10]);
		expect( odds ).toEqual([1,3,5,7,9]);
	});

});


