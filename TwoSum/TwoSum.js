/* ----------------------------------------------------------------------
My solution
-------------------------------------------------------------------------*/

var twoSum = function(nums, target) {
    var firstIndex = 0;
    var lastIndex = 0;
    var result = [];
    
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                firstIndex = i;
                lastIndex = j;
                result = [firstIndex, lastIndex];
            }
        }
    }
    
    return result;
};

/* ----------------------------------------------------------------------
Hash map example from ChatGPT (4o) 
-------------------------------------------------------------------------*/

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
