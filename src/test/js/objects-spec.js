describe("Objects", function() {

	var __ = null;
	
	
	it("should define simple function in test scope", function(){
		
		expect( helloWorld() ).toEqual("hello world");
	});
	
	it("should create a simple object with hello world method", function(){
		var simpleObject = {}; //Use object literal notation to define single function
		
		expect( typeof(simpleObject.helloWorld) ).toEqual("function");
		expect( simpleObject.helloWorld() ).toEqual("hello world");
	});
	
	it("should create a new instance of an object using a constructor", function(){
		function Dinosaur(){
			//constructors are just functions where a new 'this' has been bound.
			this.__ = "Denver";
		}
		
		expect( new Dinosaur().name ).toEqual("Denver");
		
		function Duck(name){
			//constructor arguments can be assigend just like in java.
			
			this.makeNoise = function(){
				//defining public instance functions is as simple as adding to 'this'
			}
		}
		
		var duck = new Duck("Howard");
		expect( duck.name ).toEqual("Howard");
		expect( duck.makeNoise() ).toEqual("Howard says, quack!");
	});
	
	it("should use prototype to define methods", function(){
		function Wolf(){
		}
		
		//You can also add functions to all instances of an object by using the object prototype
		Wolf.prototype.makeNoise = function(){
			return "hooooowl!";
		}
		
		var wolf = __;
		expect(wolf.__).toEqual("hooooowl!");
	});
	
	
	it("should use prototype to inherit", function(){
		function Wolf(){
		}
		
		//Javascript uses prototype as inheritence mechanism
		Wolf.prototype.genus = function(){
			return "canis";
		}
		
		Wolf.prototype.species = function(){
			return "lupus";
		}
		
		function Dog(){
			
		}
		
		//Inherit and then override the wold behavior
		Dog.__ = Wolf.prototype; 
		
		expect(new Dog().genus()).toEqual("canis");
		expect(new Dog().species()).toEqual("familiaris");
	});
	
	it("should show the difference between changing prototype and changing instance", function(){
		function Airplane(){
		}
		
		//using the prototype give the airplane object a new method, then update
		//only the red baron so he can fly home with his tail between his legs!
		
		var redBaron = new Airplane(),
		artherBrown = new Airplane();
		
		
		expect(redBaron.fireGuns()).toEqual("bang bang bang");
		expect(artherBrown.fireGuns()).toEqual("bang bang bang");
		expect(redBaron.evadeCapture()).toEqual("I will live to fight another day!");
		expect(artherBrown.evadeCapture).toBeUndefined();
	});
	//duck typing
	//object with private variables
	//object typeof/instanceof 
});


