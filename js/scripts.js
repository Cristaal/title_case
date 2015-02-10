var titleCase = function(title) {
  var titleIntoWords = title.split(" ");
  var titleEquals = "";
  titleIntoWords.forEach(function(word) {
    titleEquals += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  });
  debugger;
  return titleEquals;
};
