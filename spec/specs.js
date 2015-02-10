describe('titleCase', function() {
  // it("capitalizes the first letter of a word", function() {
  //   expect(titleCase("cat")).to.equal("Cat");
  // });

  it("capitalizes the first letter of each word in a string", function () {
    expect(titleCase("cat in the hat")).to.equal("Cat In The Hat");
  });
});
