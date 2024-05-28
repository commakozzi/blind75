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