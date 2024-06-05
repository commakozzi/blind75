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
Example from ChatGPT (4o) but suggested by my solution.  This is not 
the best way to do this at all.  Why convert to array when you can 
just use the string methods?  I was overthinking this one.
-------------------------------------------------------------------------*/

var mergeAlternately = function(word1, word2) {
    let word1Array = word1.split(''); // single or double quotes here are required.
    let word2Array = word2.split(''); // single or double quotes here are required.
    let resultingArray = [];

    for (let i = 0; i < Math.max(word1Array.length, word2Array.length); i++) {
        if (word1Array[i]) {
            resultingArray.push(word1Array[i]);
        }
        if (word2Array[i]) {
            resultingArray.push(word2Array[i]);
        }
    }

    return resultingArray.join(''); // single or double quotes here are required.
}

/* ----------------------------------------------------------------------
Best answer from Leetcode.  this example was important for me to check 
runtime on.  The top answer got 38ms runtime.  My answer with spaces
between the lines got 60ms plus.  when i took the spaces out i got 42ms.
-------------------------------------------------------------------------*/

var mergeAlternately = function(word1, word2) {
  let results = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
      if (i < word1.length) results += word1[i];
      if (i < word2.length) results += word2[i];
  }
  return results;
};