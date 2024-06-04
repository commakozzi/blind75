# Merge Strings Alternately

## Problem Description

Given two strings, `word1` and `word2`, merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

### Example

```plaintext
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
```

### Constraints

- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` consist of lowercase English letters.

## Solution

### Function Definition

The function `mergeAlternately` takes two parameters, `word1` and `word2`, both of which are strings.

### Implementation

The solution is implemented in JavaScript. Below is the code with detailed documentation:

```javascript
/**
 * Merge two strings alternately.
 *
 * @param {string} word1 - The first input string.
 * @param {string} word2 - The second input string.
 * @returns {string} The merged string where characters from word1 and word2 are added alternately.
 */
var mergeAlternately = function(word1, word2) {
    // Split both input strings into arrays of characters
    let word1Array = word1.split('');
    let word2Array = word2.split('');
    
    // Initialize an empty array to hold the resulting characters
    let resultingArray = [];
    
    // Find the length of the longer string to ensure we cover all characters
    let maxLength = Math.max(word1Array.length, word2Array.length);

    // Iterate through the characters of both arrays up to the length of the longer array
    for (let i = 0; i < maxLength; i++) {
        // If the current index exists in word1Array, push the character to the resulting array
        if (word1Array[i]) {
            resultingArray.push(word1Array[i]);
        }
        // If the current index exists in word2Array, push the character to the resulting array
        if (word2Array[i]) {
            resultingArray.push(word2Array[i]);
        }
    }

    // Join the resulting array of characters back into a string and return it
    return resultingArray.join('');
}

// Sample inputs for testing the function
console.log(mergeAlternately("abc", "pqr")); // Expected output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Expected output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Expected output: "apbqcd"
```

### Explanation

1. **Function Definition:**
   - The function `mergeAlternately` takes two parameters, `word1` and `word2`, both of which are strings.

2. **Splitting Strings:**
   - Both strings are split into arrays of characters using the `split('')` method. This allows us to access individual characters easily.

3. **Initialization:**
   - An empty array `resultingArray` is initialized to store the characters of the merged string.
   - The `maxLength` variable is calculated to determine the length of the longer input string. This ensures that we iterate enough times to cover all characters in both strings.

4. **Iterating and Merging:**
   - A `for` loop runs from `0` to `maxLength - 1`.
   - Inside the loop, we check if the current index `i` exists in `word1Array` and `word2Array`.
     - If `word1Array[i]` exists, it is pushed to the `resultingArray`.
     - If `word2Array[i]` exists, it is pushed to the `resultingArray`.

5. **Joining and Returning:**
   - After the loop completes, the `resultingArray` is joined back into a string using the `join('')` method.
   - The resulting string is returned as the output of the function.

6. **Testing:**
   - The function is tested with sample inputs to verify its correctness.

## How to Use

1. Copy the function definition into your JavaScript environment.
2. Call the `mergeAlternately` function with two string arguments.
3. The function will return a new string with the characters merged alternately.

### Sample Usage

```javascript
console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"
```

This README provides a comprehensive overview of the solution, including the problem description, solution details, and usage instructions.