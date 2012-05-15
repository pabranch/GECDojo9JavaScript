describe("Basic data types", function() {

	var __ = null;
	
	it("should be able to add two numbers together", function(){
		var i = __, j = __;
		expect( i + j ).toEqual(7);
		expect( i % 2).toEqual(1);
		
		//what is the sound of two hand clapping?
		expect(null + null).toEqual(__);	
	});
	
	it("should be short enough to memorize", function(){
		expect(Math.PI.__).toEqual('3.14');	
	});
	
	it("should be wordy", function(){
		var s = "shipmates",
		t = "friends";
		expect( __ ).toEqual("shipmates & friends");
		
	});
	
	it("should be picky", function(){
		
		//Use String method to find single character
		expect( "shipmates".__ ).toEqual("p");
		
	});
	
	it("should be independent", function(){
		
		//Use String method to extract substring - and try to do it with out using substr or substring
		expect( "friends".__ ).toEqual("end");

	});
	
	it("should not like white space", function(){
		
		expect( " too spacey ".__ ).toEqual("too spacey");
		
	});
	
	it("should not be confused by numbers", function(){
		
		expect( "__" + __ ).toEqual(34);
		
	});
	
	it("should know how to make arrays", function() {
		
		//Build a literal array
		var daysOfWeek = __;
		expect(daysOfWeek).toContain('Monday');
		expect(daysOfWeek).toContain('Tuesday');
		expect(daysOfWeek).toContain('Wednesday')
		expect(daysOfWeek).toContain('Thursday');
		expect(daysOfWeek).toContain('Friday');

		
		//Use array methods to change days of week
		daysOfWeek.__;
		expect(daysOfWeek).toContain("Saturday");
		expect(daysOfWeek).toContain("Sunday");
		
	});
	
	it("should slice and dice", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		
		//Use array methods to reduce exisiting days of week
		workingWeek = daysOfWeek.__,
		weekend = __;
		
		
		expect(workingWeek).toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
		expect(weekend).toEqual(['Sunday', 'Saturday']);
	});
	
	it("should be backwards", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysOfWeekInReverse = daysOfWeek.__;
		
		expect(daysOfWeekInReverse).toEqual(['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday']);
	});
	
	it("should be a week with one less day of rest", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		
		firstDayOfTheWeek = daysOfWeek.__;
		
		expect(firstDayOfTheWeek).toEqual('Sunday');
		expect(daysOfWeek).toEqual([ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
	});
	
	it("should a mouthful", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysAsString = daysOfWeek.__;
		
		expect(daysAsString).toEqual('Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday');
	});
	
	it("should think of an object like a dictionary or map", function() {
		var car = {}; //this is the syntax for an object literal
		car.__ = "herbie";
		car["__"] = 53; 
		expect(car).toEqual({name:"herbie", value:53});
	});
	
	it("should not always expect an object to have the same properties", function() {
		var pocket = {contents:"keys"};
		__; //Expression should 'delete' an objects property
		expect(pocket.contents).toBeUndefined();
	});
	
});


