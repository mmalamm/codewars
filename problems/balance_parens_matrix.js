// this was not a codewars problem. it was a private company hackerrank

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts 2D_CHARACTER_ARRAY matrix as parameter.
 */

const isValidMatrix = matrix => {
  if (matrix.length === 0) return false;
  if (matrix[0].length === 0) return false;
  return true;
};

const checkHoriz = mtx => {
  const stack = [];
  for (let i = 0; i < mtx.length; i++) {
    for (let j = 0; j < mtx[i].length; j++) {
      const curr = mtx[i][j];
      if (curr === ")" && stack[stack.length - 1] !== "(") return false;
      if (curr === "(") stack.push("(");
      if (curr === ")" && stack[stack.length - 1] === "(") stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
};

const checkVert = mtx => {
  const height = mtx.length;
  const width = mtx[0].length;
  const stack = [];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const curr = mtx[j][i];
      if (curr === ")" && stack[stack.length - 1] !== "(") return false;
      if (curr === "(") stack.push("(");
      if (curr === ")" && stack[stack.length - 1] === "(") stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
};

function isBalanced(matrix) {
  return isValidMatrix(matrix) && checkHoriz(matrix) && checkVert(matrix);
}
