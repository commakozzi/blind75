/* ----------------------------------------------------------------------
My solution
-------------------------------------------------------------------------*/

var twoSum = function(nums, target) {
    /* ------------------------------------------------------------------
    Create variables to hold first index, last index and the result:
    ---------------------------------------------------------------------*/
    var firstIndex = 0;
    var lastIndex = 0;
    var result = [];
    
    /* ------------------------------------------------------------------
    Loop through the nums array and compare each number with the next until
    two numbers are found that add to the target and set the first number
    to the firstIndex variable and set the second number to the lastIndex
    variable.  Finally, add these to the result array. 
    ---------------------------------------------------------------------*/
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                firstIndex = i;
                lastIndex = j;
                result = [firstIndex, lastIndex];
            }
        }
    }
    
    // return the result array
    return result;
};

/* ----------------------------------------------------------------------
Hash map example from ChatGPT (4o) 
-------------------------------------------------------------------------*/

var twoSum = function(nums, target) {
    /* ------------------------------------------------------------------
    Create an empty hash map to store the index of the nums that add up to the target.
    let map = new Map();
    ---------------------------------------------------------------------*/
    
    /* ------------------------------------------------------------------
    Loop through the nums array and find the number that when subtracted from
    the target, equals the target when added to another number in the nums array.  
    Do this by saving the complement to the hash map and then checking whether 
    that number exists when the next nums is subtracted from the target.  Then
    add the index of the complement and the index of the current nums to the
    result array and return it. 
    ---------------------------------------------------------------------*/
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
};

/*
REMEMBER:  map.set() and map.get() set and get KEY: VALUE pairs!!!
Note to self:  ALWAYS check the documentation to make sure you really do understand what something does!

1st iteration:
i = 0;
complement = 9 - 2; (7)
map.has(complement) = false;
no return;
map.set(2, 0);

2nd iteration:
i = 1;
complement = 9 - 7; (2)
map.has(complement) = true;
return [0, 1];
the above return escapes the function
*/
