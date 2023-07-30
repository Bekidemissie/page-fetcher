// Group assignment 
//each element has its row become its column, and its column become its row.
// 

const transpose = function (matrix) {
// this function to transpose the matrix row to colomon. 
const result = [];

for (let i = 0; i < matrix[0].length; i++) {
  const col = []
  for (let j = 0; j <matrix.length; j++) {
    col.push(matrix[j][i]);
  }
  result.push(col)
}
return result;
};
  
  // Do not edit this function.
  const printMatrix = (matrix) => {
    for (const row of matrix) {
      for (const el of row) {
        process.stdout.write(el + " ");
      }
      process.stdout.write("\n");
    }
  };
  
  printMatrix(
    transpose([
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ])
  );
  
  console.log("----");
  
  printMatrix(
    transpose([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  );
  
  console.log("----");
  
  printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));
