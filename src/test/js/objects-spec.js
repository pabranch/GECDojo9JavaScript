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
		
	});

	it("should use constructor parameters to configure new object", function(){

		function Duck(name){
			//constructor arguments can be assigend just like in java, however you may find 'this' more important in JS
			
		}
		Duck.prototype.makeNoise = function(){
			
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
		
		//Inherit and then override the wolf behavior
		Dog.prototype = __; 
		
		expect(new Dog().genus()).toEqual("canis");
		expect(new Dog().species()).toEqual("familiaris");
		expect(new Wolf().genus()).toEqual("canis");
		expect(new Wold().species()).toEqual("lupus");
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
		expect(artherBrown.fireGuns).toEqual(redBaron.fireGuns);
		expect(redBaron.evadeCapture()).toEqual("I will live to fight another day!");
		expect(artherBrown.evadeCapture).toBeUndefined();
	});
	
	it("should show how to create private variables and methods", function(){
		
		var mockNotify = jasmine.createSpy("notify"), 
		notificationService = {notify:mockNotify};
			
		function Account(initialBalance, notificationService){
			//This is a private variable
			var balance;
			
			//this is a privileged method
			this.decrement = function(amount){
			}
			
			//this is a private method
			function notifyAccountHolder(){
				//notify service with amount under 0 balance
			}
		}

		var account = new Account(100, notificationService);
		account.decrement(200);
		expect(mockNotify).toHaveBeenCalledWith(-100);
		
		//as an exercise, are prototype methods public, privileged or private? How do you prove it?
	});
	
	it("should show how to create inheritance chain", function(){
		
		function Person(){}
		function Programmer(){}
		function JavaProgrammer(){}
		function CProgrammer(){}
		function GWTProgrammer(){}
		
		//Link object prototypes together so that the following expectations are correct.
		var gwtProgrammer, kernelHacker;
		
		expect(gwtProgrammer instanceof Person).toBeTruthy();
		expect(gwtProgrammer instanceof Programmer).toBeTruthy();
		expect(gwtProgrammer instanceof JavaProgrammer).toBeTruthy();
		expect(gwtProgrammer instanceof CProgrammer).toBeFalsy();
		expect(gwtProgrammer instanceof GWTProgrammer).toBeTruthy();
		
		expect(kernelHacker instanceof Person).toBeTruthy();
		expect(kernelHacker instanceof Programmer).toBeTruthy();
		expect(kernelHacker instanceof CProgrammer).toBeTruthy();
		expect(kernelHacker instanceof JavaProgrammer).toBeFalsy();
		expect(kernelHacker instanceof GWTProgrammer).toBeFalsy();
	});
	
	
	//These next definitions are for use in the last 4 koans
	function unbound() {
		return this;
	}
	
	function FirstObject() {
	}
	
	FirstObject.prototype.bound = function() {
		return this;
	}
	
	it("unbound functions have a global this", function() {
		expect(unbound()).toEqual(__);
	});
	
	it("methods are just bound functions.", function() {
		var anObject = new FirstObject();
		expect(anObject.bound()).toEqual(__);
	});
	
	it("but methods can be repurposed", function() {
		var anObject = new FirstObject();
		expect(anObject.bound.apply(window)).toEqual(__);
	});
	
	it("unbound functions can become methods", function() {
		var anObject = new FirstObject();
		expect(unbound.apply(anObject)).toEqual(__);
	});
});


