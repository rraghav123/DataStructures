/*
*   Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
* */

/*
*   Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
* */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  const zeroPos = {};
  let setZero = false
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        setZero = true;
        if(!zeroPos[j]) {
          zeroPos[j] = true;
        }
      }
    }
    if(setZero) {
      matrix[i].fill(0);
      setZero = false;
    }
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j< matrix[i].length; j++) {
      if(zeroPos[j] && matrix[i][j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
