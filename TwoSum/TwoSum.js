var nums = [];
var target = 0;
var result = [];

TwoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result += [nums[i], nums[j]];
    }
    return result;
  }
}