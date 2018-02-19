//algorithm to find an island of connected 1s in a matrix of 0s and 1s

function countIsland(matrix) {
  if (!matrix) return;

  let row = matrix[0].length;
  let column = matrix.length;

  if (row ===0 && column ===0 ) return;

  const count = 0;

  for (let i=0; i < row; i++) {
    for (let j=0; j< column; j++) {
      if (matrix[i][j] === 1) {

        count++

        dfs(matrix, i, j);
      }
    }
  }

  return count;
}

function dfs(matrix, l, r) {
  //check index out of bound
  if (l <= 0 || r <= 0 || l >= matrix.length || r >= matrix[0].length ) {
    return;
  }

  if (matrix[l][r] === 1) {
    matrix[l][r] = 0;

    dfs(matrix, l, r-1);
    dfs(matrix, l-1, r);
    dfs(matrix, l+1, r);
    dfs(matrix, l, r+1);
  }

}

console.info(countIsland([[0,0,0,0,0], [0,1,1,1,0], [0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0],[1,0,0,0,0]]));