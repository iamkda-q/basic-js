const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let [upStr, downStr] = [matrix[0], matrix[1]];
  let sum = upStr.reduce((sum, i) => sum+=i);
  if (matrix.length === 1) {
    return sum;
  }

  for (let i=1; i < matrix.length; i++) {
    for (let j=0; j < upStr.length; j++) {
      if (upStr[j] != 0) {
        sum += downStr[j]
      }
    }
    [upStr, downStr] = [downStr, matrix[i+1]];
  }
  return sum;
  
}

// console.log(getMatrixElementsSum([[0]]));

module.exports = {
  getMatrixElementsSum
};
