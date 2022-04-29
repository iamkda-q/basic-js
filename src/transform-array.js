const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            if (i != arr.length - 1) {
                resultArr.push(null); // пушим ноль для случаев input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],output: [1, 2, 3, 4, 5]
                i++;
            }
        } else if (arr[i] === "--discard-prev") {
            if (i) {
                resultArr.pop();
            }
        } else if (arr[i] === "--double-next") {
            if (i != arr.length - 1) {
                resultArr.push(arr[i + 1]);
            }
        } else if (arr[i] === "--double-prev") {
            if (resultArr[resultArr.length - 1] && i) {
                resultArr.push(arr[i - 1]);
            }
        } else {
            resultArr.push(arr[i]);
        }
    }
    return resultArr.filter((i) => i); // избавляемся от null
}

module.exports = {
    transform,
};
