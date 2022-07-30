
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let result = [];
    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0 ? result.push(matrix[i]) : result.push(matrix[i].reverse());
    }
    return result.flat();
}
