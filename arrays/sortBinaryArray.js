// Sort Binary Array in Linear Time
// Given a binary array, sort it in linear time and constant space.

// Input: [1, 0, 1, 0, 1, 0, 0, 1]

// Output: [0, 0, 0, 0, 1, 1, 1, 1]

const sortBinaryArray = (binaryArr) => {
  const sum = binaryArr.reduce((acc, val) => {
    return acc += val;
  }, 0);
  const zeros = binaryArr.length - sum;
  for (let i = 0; i < binaryArr.length; i++) {
    if (i < zeros) {
      binaryArr[i] = 0
    } else {
      binaryArr[i] = 1;
    }
  }
  return binaryArr;
};


console.log(sortBinaryArray([1, 0, 1, 0, 1, 0, 0, 1]));
console.log(sortBinaryArray([1, 0, 0, 0, 0]));