// https://www.techiedelight.com/find-sub-array-with-0-sum/
// Given an array of integers, print all sub-arrays with 0 sum

// Example:

// Input: [ 4, 2, -3, -1, 0, 4 ]

// Output: Sub-arrays with 0 sum are [ -3, -1, 0, 4 ] and [ 0 ]

// Input: [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ]

// Output: Subarray with 0 sum exists
// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

// Naive Approach
var printZeroSubArrays = (arr) => {
  const subArrays = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]
      if (sum === 0) {
        subArrays.push(arr.slice(i, j + 1));
      }
    }
  }
  return subArrays.length === 0 ? 'No sub-arrays found!' : subArrays;
};

// More Optimized Approach
var printZeroSubArrays = (arr) => {

};

console.log(printZeroSubArrays([ 4, 2, -3, -1, 0, 4 ]))
console.log(printZeroSubArrays([ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ]));









