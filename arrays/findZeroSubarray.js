// http://www.techiedelight.com/check-subarray-with-0-sum-exists-not/
// Check if subarray with 0 sum exists or not
// Given an array of integers, check if array contains a subarray that sums to zero

// Example:

// Input: [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ]

// Output: Subarray with 0 sum exists
// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

const findZeroSubarray = (arr) => {
  const zeroSet = new Set([0]);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (zeroSet.has(sum)) {
      return true;
    } else {
      zeroSet.add(sum);
    }
  }
  return false;
};

console.log(findZeroSubarray([ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ]));
console.log(findZeroSubarray([ 1, 1, 1 ]));