describe("Namespaces and Modules", function() {

	var __ = null;
	
	// simply adds 2 to the argument
	function add2(x) {
		return x + 2;
	}
	
	var myNamespace = function() {

		return {
			// multiplies as in "add two of your argument together"
			add2 : function(x) {
				return x * 2; 
			}
		};

	}();

	it("should use the global function", function(){		
		var aNumber = 6,
		result; 
		
		result = __;
		
		expect( result ).toEqual(8);
	});
	
	it("should use the namespaced function", function(){
		var aNumber = 6,
		result; 
		
		result = __;
		
		expect( result ).toEqual(8);
	});
});