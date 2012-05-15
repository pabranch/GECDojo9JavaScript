describe("Eval is interesting",function(){
	it("",function(){
		var dynamicfunction = eval('('+functionAsString+')');
		expect(dynamicfunction()).toEqual(__);
	});
});

var functionAsString = "function(){return 'hello world';}"

describe("JSON",function(){
	it("String can become objects",function(){
		var glossary = eval('('+__+')');
		var abbrev = __;
		expect(abbrev).toEqual('ISO 8879:1986');
	});
});


var sampleJSON = "{'glossary': {'title': 'example glossary','GlossDiv': {'title': 'S','GlossList': {'GlossEntry': {'ID': 'SGML','SortAs': 'SGML','GlossTerm': 'Standard Generalized Markup Language','Acronym': 'SGML','Abbrev': 'ISO 8879:1986','GlossDef': {'para': 'A meta-markup language, used to create markup languages such as DocBook.','GlossSeeAlso': ['GML', 'XML']},'GlossSee': 'markup'}}}}}"

