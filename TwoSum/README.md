# Two Sum Problem Solution in JavaScript

## Problem Description
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Example
**Input:** `nums = [2, 7, 11, 15]`, `target = 9`  
**Output:** `[0, 1]`

**Explanation:** Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

## Solution

### JavaScript Code

```javascript
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
```

### Explanation
1. **Initialization:**
   - Create a new `Map` to store the elements and their indices.
   
2. **Iteration:**
   - Loop through the array `nums`.
   - Calculate the `complement` which is the difference between the `target` and the current element `nums[i]`.

3. **Check for Complement:**
   - If the `map` contains the `complement`, return the indices `[map.get(complement), i]`.

4. **Store in Map:**
   - If the `complement` is not found, store the current element and its index in the `map`.

5. **Return Result:**
   - The function returns the indices of the two numbers that add up to the `target`.

## Summary
This solution efficiently finds the indices of the two numbers that add up to the target using a hash map for constant time lookups. The overall time complexity is O(n) where n is the number of elements in the array.

This method ensures that we do not use the same element twice and returns the correct pair of indices as required by the problem statement.

Sure, I'd be happy to explain what O(n²) means!

### Understanding Big O Notation
Big O notation is used to describe the time complexity of an algorithm, which is a measure of how the running time of an algorithm increases as the size of the input increases. It provides an upper bound on the time complexity and helps to understand the efficiency of an algorithm.

### O(n²) Time Complexity
O(n²) means that the running time of the algorithm increases quadratically as the size of the input (n) increases. In other words, if you double the size of the input, the running time will roughly increase by a factor of four.

### Example with Nested Loops
An O(n²) time complexity often arises from algorithms that use nested loops to process the input. Here's an example to illustrate this:

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // Some constant time operation
    }
}
```

In this example:
1. The outer loop runs `n` times.
2. For each iteration of the outer loop, the inner loop also runs `n` times.

This results in a total of `n * n = n²` iterations. Therefore, the time complexity of this algorithm is O(n²).

### Comparison with Other Time Complexities
- **O(1)**: Constant time. The running time does not change with the size of the input.
- **O(n)**: Linear time. The running time increases linearly with the size of the input.
- **O(log n)**: Logarithmic time. The running time increases logarithmically with the size of the input.
- **O(n log n)**: Linearithmic time. The running time increases in proportion to n log n.
- **O(n²)**: Quadratic time. The running time increases quadratically with the size of the input.
- **O(2^n)**: Exponential time. The running time doubles with each additional element in the input.

### Application to Your Two Sum Solution
In your original solution for the Two Sum problem, you used nested loops:

```javascript
for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
            return [i, j];
        }
    }
}
```

- The outer loop runs `n` times (where `n` is the length of the `nums` array).
- The inner loop runs up to `n - 1` times for each iteration of the outer loop.

This results in approximately `n * (n - 1) / 2` iterations, which simplifies to O(n²) in Big O notation.

### Optimized Solution: O(n) Time Complexity
By using a hash map, we can reduce the time complexity to O(n), as we only need a single pass through the array:

```javascript
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
};
```

In this optimized solution, each operation (checking the map and adding to the map) is O(1), resulting in a total time complexity of O(n).

### Explanation of `map.get`

In JavaScript, a `Map` is a collection of key-value pairs. The `map.get` method is used to retrieve the value associated with a specific key from the map.

Here's the specific line in your code where `map.get` is used:

```javascript
return [map.get(complement), i];
```

### Detailed Explanation

1. **Initialization and Iteration**:
    ```javascript
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
    ```
    - We are iterating through the `nums` array.
    - For each element `nums[i]`, we calculate its complement (i.e., the value needed to add up to the `target`).

2. **Checking for the Complement**:
    ```javascript
    if (map.has(complement)) {
    ```
    - We check if the complement already exists in the map using `map.has(complement)`.
    - If it exists, it means we have already encountered the element that, when added to `nums[i]`, equals the `target`.

3. **Using `map.get` to Retrieve the Index**:
    ```javascript
    return [map.get(complement), i];
    ```
    - If the complement is found in the map, `map.get(complement)` retrieves the index of the complement.
    - `i` is the current index of `nums[i]`.

#### Example Walkthrough

Let's consider an example where `nums = [2, 7, 11, 15]` and `target = 9`:

- **Iteration 1 (i = 0)**:
    - `nums[i] = 2`
    - `complement = 9 - 2 = 7`
    - `map.has(7)` is false (map is empty at this point).
    - `map.set(2, 0)` adds `{2: 0}` to the map.

- **Iteration 2 (i = 1)**:
    - `nums[i] = 7`
    - `complement = 9 - 7 = 2`
    - `map.has(2)` is true (map has the key `2` with value `0`).
    - `map.get(2)` retrieves the value `0` (the index of the number `2` in the array).
    - `return [map.get(complement), i]` returns `[0, 1]`.

### Summary
- `map.get(key)` retrieves the value associated with the specified `key` from the map.
- In this context, it retrieves the index of the complement number, which allows us to return the indices of the two numbers that add up to the target.

If you have any further questions or need more clarification, feel free to ask! If you're ready, we can move on to the next problem.