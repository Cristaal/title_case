describe('titleCase', function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first letter of each word in a string", function () {
    expect(titleCase("cat in the hat")).to.equal("Cat in the Hat");
  });

  it("returns proper title case even if presented with letters in middle of word capitalized", function() {
    expect(titleCase("cat IN the hAt")).to.equal("Cat in the Hat");
  });

  it("ignores prepositions and articles", function () {
    expect(titleCase("Cat In The Hat")).to.equal("Cat in the Hat");
  });

  it("capitalizes the first letter of a title no matter what it is", function() {
    expect(titleCase("a cat in the haT")).to.equal("A Cat in the Hat");
  });

  it("ignores special characters like hyphens and colons", function () {
    expect(titleCase("crystal contreras-grossman")).to.equal("Crystal Contreras-Grossman");
  });
});
