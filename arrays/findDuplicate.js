// http://www.techiedelight.com/find-duplicate-element-limited-range-array/
// Find a duplicate element in a limited range array
// Given a limited range array of size n where array contains elements between 1 to n-1 with one element repeating, find the duplicate number in it.

// Example:

// Input: [1, 2, 3, 4, 4]
// Output: The duplicate element is 4

// Input: [1, 2, 3, 4, 2]
// Output: The duplicate element is 2

const findDuplicate = (arr) => {
  const upperRange = arr.length - 1;
  const computedSum = (upperRange * (1 + upperRange)) / 2;
  const actualSum = arr.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return `The duplicate element is ${actualSum - computedSum}`;
};

console.log(findDuplicate([1, 2, 3, 4, 4]));
console.log(findDuplicate([1, 2, 3, 4, 2]));