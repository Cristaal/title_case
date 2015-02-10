var titleCase = function(title) {
  var titleIntoWords = title.toLowerCase().split(" ");
  var titleEquals = "";
  var titlePrepositions = ["a" ,"an", "in", "the", "of", "and", "v", "v.", "vs"];
  titleIntoWords.forEach(function(word) {
    if(titlePrepositions.indexOf(word) === -1) {
      titleEquals += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }else{
      titleEquals += word.charAt(0) + word.slice(1) + " ";
    }
  });
  return titleEquals.trim();
};
