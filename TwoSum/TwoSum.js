/* My solution */

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

/* Hash map example from ChatGPT (4o) */

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