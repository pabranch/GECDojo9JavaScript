describe("Functional", function() {

	var __ = null;
	
	it("should loop through contents of an array using forEach", function(){
		var allNumbers= [1,2,3,4,5,6,7,8,9,10],
		evens= [],
		odds = []; 
		
		allNumbers.__;
		
		expect( evens ).toEqual([2,4,6,8,10]);
		expect( odds ).toEqual([1,3,5,7,9]);
	});
	
	it("should show that functions are objects too", function(){
		var variableIncrement = function(incrementor, initialValue, amount){
			//use methods on the function object to call the function with a known number of arguments.
		}
		
		function incrementor(initialValue, amount){
			return initialValue + amount;
		}
		
		expect(variableIncrement(incrementor, 10, 5)).toEqual(15);
		
	});
	
	it("should show that functions can be called with variable arg lists", function(){
		var summation = function(func){
			//use methods on the function object to call the function with an unknown number of arguments.
		}
		
		function sum(){
			var total = 0,i;
			for (i = 0; i < arguments.length; i++) {
				total += arguments[i];
			}
			return total;
		}
		
		function multiply(){
			var total = 1, i;
			for (i = 0; i < arguments.length; i++) {
				total *= arguments[i];
			}
			return total;
		}
		
		expect(summation(sum, 1,2,3,4,5,6,7,8)).toEqual(36);
		expect(summation(sum, 2,2,2,2,2,2)).toEqual(12);
		expect(summation(sum, -1,1,-1,1)).toEqual(0);
		
		expect(summation(multiply, 1,2,3,4,5,6,7,8)).toEqual(40320);
		expect(summation(multiply, 2,2,2,2,2,2)).toEqual(64);
		expect(summation(multiply, -1,1,-1,1)).toEqual(1);
		
	}); 
	
	it("should add mapping function to array", function(){
		var numbers = [0,1,2,3,4,5,6,7,8,9];

		//define test functions
		function isEven(){
			
		}
		
		function isOdd(){
			
		}
		
		//add new method to array class called applyFunction which returns a new array based on function argument
		expect(numbers.applyFunction(isEven)).toEqual([0,2,4,6,8]);
		expect(numbers.applyFunction(isOdd)).toEqual([1,3,5,7,9]);
		
	});
	
	it("should add foldLeft method to array", function(){
		var numbers = [1,2,3,4,5,6,7,8,9];

		function add(){}
		
		function multiply(){}
		
		//add new method to array class called foldLeft which applys an operation and maintains the total sum
		expect(numbers.foldLeft(add)).toEqual(45);
		expect(numbers.foldLeft(multiply)).toEqual(362880);
		
	});
	
	it("should partially apply a function", function(){

		function multiplyByTwo(b){
			//use multiply function to perform multiplication by 2 
		}
		
		function squareAndDouble(b){
			//use multiply function to perform multiplication by 3
		}
		
		function multiply(a,b){
			return a * b;
		}
		

		expect(multiplyByTwo(2)).toEqual(4);
		expect(squareAndDouble(3)).toEqual(18);
		
	});
	
	it("should evaluate a function lazily", function(){
		var numbers = [0,1,2,3,4,5,6,7,8,9];

		function lazySlice(list){
			//how do you create a context which will execute at a later time?
			return function(){
				return list.slice(1,5);
			}
		}
		
		var lazy = lazySlice(numbers);
		numbers.reverse();
		
		expect(lazy()).toEqual([8,7,6,5]);
		
		
	});
	
});


