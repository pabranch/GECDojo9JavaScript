describe("JSON Parsing Fun", function() {
	var jsonString = '{"movies":[{"title":"Star Trek","director":"Robert Wise","year":"1979"},{"title":"Star Trek II: The Wrath of Khan","director":"Nicholas Meyer","year":"1982"},{"title":"Star Trek IV: The Voyage Home","director":"Nicholas Meyer","year":"1986"},{"title":"Shawshank Redemotion","director":"Frank Darabont","year":"1994"},{"title":"The Godfather","director":"Francis Ford Copppola","year":"1972"},{"title":"Pulp Fiction","director":"Quentin Tarantino","year":"1994"},{"title":"12 Angry men","director":"Sidney Lumet","year":"1957"},{"title":"Fight Club","director":"David Fincher","year":"1999"},{"title":"Goodfellas","director":"Martin Scorsese","year":"1990"},{"title":"City of God","director":"Fernando Meirelles","year":"2002"},{"title":"The Matrix","director":"Andy Wachowski","year":"1999"},{"title":"Raiders of the Lost Ark","director":"Steven Spielberg","year":"1981"},{"title":"The Silence of the Lambs","director":"Jonathan Demme","year":"1991"}]}';
	var json = JSON.parse(jsonString);

	it("Should find 1 movie in the year 1979", function() {
		
		expect(JSON.stringify([found])).toEqual('[{"title":"Star Trek","director":"Robert Wise","year":"1979"}]');
	});
	it("Should add a new movie", function() {
		var title, director, year;

		expect(json).toEqual(__);
		expect(__).toEqual(title);
	});
	it("Should remove all movies directed by Robert Wise", function() {
		
		expect(json.movies.length).toEqual(13);
	});
});
