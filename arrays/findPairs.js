// Find Pair with given Sum in the Array
// Given an unsorted array of integers, find a pair with given sum in it

// Example:

// Input:
// arr = [8, 7, 2, 5, 3, 1]
// sum = 10

// Output:
// Pair found at index 0 and 2 (8+2) or pair found at 1 and 4 (7 + 3)

// Naive Approach
var findPair = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
  	for (let j = 0; j < arr.length; j++) {
  		if (arr[i] + arr[j] === sum) {
  			return `Pair found at index ${i} and ${j}`;
  		}
  	}
  }
  return 'No pairs found!';
};

// More Optimized Approach
var findPair = (arr, sum) => {
	let storedPairs = {};
	for (let i = 0; i < arr.length; i++) {
		if (storedPairs[sum - arr[i]]) {
			return `Pair found at index ${storedPairs[sum - arr[i]]} and ${i}`
		} else {
			storedPairs[arr[i]] = i;
		}
	}
	return 'No pairs found!'
};

const testFindPair = (expected, output) => {
	if (expected !== output) {
		return 'test failed!'
	} else {
		return 'test passed!'
	}
};

console.log(testFindPair(findPair([8, 7, 2, 5, 3, 1], 10), 'Pair found at index 1 and 4'));
console.log(findPair([8, 7, 2, 5, 3, 1], 10));


