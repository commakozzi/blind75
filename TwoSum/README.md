

# Example Walkthrough

Given nums = [2, 7, 11, 15] and target = 9:

Initial State

	•	nums = [2, 7, 11, 15]
	•	target = 9
	•	map = {} (empty initially)

Iteration 1 (i = 0)

	•	nums[i] = 2
	•	Calculate complement = 9 - 2 = 7
	•	Check if 7 is in map: No
	•	Add 2 to map: map = {2: 0}

Iteration 2 (i = 1)

	•	nums[i] = 7
	•	Calculate complement = 9 - 7 = 2
	•	Check if 2 is in map: Yes (found at index 0)
	•	map.get(2) retrieves the value 0 (the index of the number 2 in the array).
	•	return [map.get(complement), i] returns [0, 1].

Final Output

The indices of the two numbers that add up to the target are [0, 1].

Summary

	•	map.get(key) retrieves the value associated with the specified key from the map.
	•	In this context, it retrieves the index of the complement number, which allows us to return the indices of the two numbers that add up to the target.

Time Complexity

The optimized solution has a time complexity of O(n) because it iterates through the array only once.

You can copy and paste this README into your project. If you have any more questions or need further assistance, feel free to ask!