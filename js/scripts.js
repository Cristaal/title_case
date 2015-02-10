var titleCase = function(title) {
  var titleIntoWords = title.toLowerCase().split(" ");
  var titleEquals = "";
  var titlePrepositions = ["a" ,"an", "in", "the", "of", "and", "v", "v.", "vs"];
  titleIntoWords.forEach(function(word) {
    var xyz = word.split("-");
    for(var i=0; i<xyz.length; i++){
      if(xyz.length>1){
        xyz[i] = xyz[i].charAt(0).toUpperCase() + xyz[i].slice(1);
      }
    }
    word = xyz.join("-");


    if(titlePrepositions.indexOf(word) === -1) {
      titleEquals += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }else{
      if (titleEquals === ""){
        titleEquals += word.charAt(0).toUpperCase() + word.slice(1) + " ";
      }else {
        titleEquals += word.charAt(0) + word.slice(1) + " ";
      }
    }
  });
  return titleEquals.trim();
};
