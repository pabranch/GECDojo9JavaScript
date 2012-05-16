
describe("DOM", function() {
	
	//find by id, class, query selector
	//append new elements
	//move elements around
	it("always more documents", function() {
		var aTag = document.getElementById(__);
		expect(aTag.tagName).toEqual("A");
	});
	
	it("Create a link to the past with just the right amount of sarcasim", function() {
		document.getElementById("firstLink").setAttribute(__,__);
		document.getElementById("firstLink").appendChild(document.__);
		
		expect(document.getElementById("firstLink").getAttribute("href")).toEqual("http://www.altavista.com");
		expect(document.getElementById("firstLink").textContent.trim()).toEqual("Olde Tyme Search");
	});
	
	it("should use dom queryselector to find all links on the page",function(){
		var links = document.querySelectorAll("a");
		expect(links.legnth).toEqual(4);
	});
});

