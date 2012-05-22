describe("JQuery", function() {

	var __ = null;
	
	it("always more documents", function() {
		var aTag = $(__);
		expect(aTag.tagName).toEqual("A");
	});
	
	it("Create a link to the past with just the right amount of sarcasm", function() {
		$("#firstLink").__; //Set href attribute
		$("#firstLink").__; //append new text content
		
		expect(document.getElementById("firstLink").getAttribute("href")).toEqual("http://www.altavista.com");
		expect(document.getElementById("firstLink").textContent.trim()).toEqual("Olde Tyme Search");
	});
	
	it("should use dom queryselector to find all links on the page",function(){
		var links = $(__);
		expect(links.length).toEqual(4);
	});
	
	it("should use dom queryselector to find elements with class='test'",function(){
		var links = $(__);
		expect(links.length).toEqual(3);
	});
	
	it("should move span with class 'test' into li with class 'container'",function(){
		var span = __ , container = __;
		//use dom method to re-located the span inside the li
		expect(document.querySelector('li.container').children.item(0)).toEqual(span);
	});
});


