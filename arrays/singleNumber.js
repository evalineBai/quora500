// https://leetcode.com/problems/single-number/
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example:
// Input: [4, 1, 2, 1, 2]
// Output: 4


// Naive Appraoch:
var singleNumber = function(nums) {
  const doubles = {};
  nums.forEach(function(num) {
    if (doubles[num]) {
      doubles[num]++;
    } else {
      doubles[num] = 1;
    }
  });
  for (key in doubles) {
    if (doubles[key] === 1) {
      return key;
    }
  }
};

// Bitwise XOR Approach:
var singleNumber = function(nums) {
  var res = 0;
  for (var i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
    console.log(res);
  }
  return res;
};

var singleNumber = function(nums) {
  return nums.reduce(function(val, acc) {
    return val ^ acc;
  });
}

// Bitwise XOR: Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.

// 4: 0100    4: 0100
// 1: 0001    5: 0101
// 2: 0010    7: 0111
// 1: 0001    6: 0110
// 2: 0010    4: 0100

console.log(singleNumber([4, 1, 2, 1, 2]));