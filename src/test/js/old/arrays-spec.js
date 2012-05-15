describe("Arrays", function() {

	var __ = null;
	it("slice and dice", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var workingWeek = __;
		var weekend = __;
		
		
		expect(workingWeek).toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
		expect(weekend).toEqual(['Sunday', 'Saturday']);
	});
	
	it("should be backwards", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var daysOfWeekInReverse = daysOfWeek.__;
		expect(daysOfWeekInReverse).toEqual(['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday']);
	});
	
	it("a week with one less day of rest", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var firstDayOfTheWeek = __;
		expect(firstDayOfTheWeek).toEqual('Sunday');
		expect(daysOfWeek).toEqual([ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
	});
	
	it("a mouthful", function() {
		var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var daysAsString = __;
		expect(daysAsString).toEqual('Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday');
	});
});


