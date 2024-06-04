/* ----------------------------------------------------------------------
My solution: (i knew i needed to compare the lengths and find the max length
    but wasn't sure how to do it) 
-------------------------------------------------------------------------*/

var mergeAlternately = function(word1, word2) {
    let word1Array = word1.split("");
    let word2Array = word2.split("");
    //let totalCharacters = word1Array.length + word2Array.length;
    let resultingArray = [];
    
    for (var i = 0; i < word1Array.length; i++) {
      resultingArray.push(word1Array[i]);
  
      for (var j = 0; j < word2Array.length; j++) {
        resultingArray.push(word2Array[j]);
      }
    }
  
    return resultingArray.toString();
  };

/* ----------------------------------------------------------------------
Example from ChatGPT (4o) 
-------------------------------------------------------------------------*/

var mergeAlternately = function(word1, word2) {
    let word1Array = word1.split(''); // single or double quotes here are required.
    let word2Array = word2.split(''); // single or double quotes here are required.
    let resultingArray = [];
    let maxLength = Math.max(word1Array.length, word2Array.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1Array[i]) {
            resultingArray.push(word1Array[i]);
        }
        if (word2Array[i]) {
            resultingArray.push(word2Array[i]);
        }
    }

    return resultingArray.join(''); // single or double quotes here are required.
}