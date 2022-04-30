const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    const cleanMatrix = matrix.map((i) => i.map(f => 0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === true) {
            for (let i1 = i ? i - 1 : i ; i1 < i + ((i === matrix.length - 1) ? 1 : 2); i1++) {
              for (let j1 = j ? j - 1 : j ; j1 < j + ((j === matrix[i].length - 1) ? 1 : 2); j1++) {
                if (i == i1 && j == j1) {
                  continue
                }
                cleanMatrix[i1][j1] += 1;
              }
            }
            
          }
        }
    }
    return cleanMatrix;
}

// console.log(
//     minesweeper([
//         [false, false, false],
//         [false, false, true],
//         [false, true, false],
//     ])
// );

module.exports = {
    minesweeper,
};
