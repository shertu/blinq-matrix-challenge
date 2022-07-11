export type Matrix = number[][];

/**
 * Will re-order and re-shape a matrix to "rotate it clockwise."
 */
export function matrixToClockwise(value: Matrix): Matrix {
  // get dimensions of tensor
  const dimALength: number = value.length;
  const dimBLength: number = value[0].length;

  const output: Matrix = [];
  for (let j = 0; j < dimBLength; j++) {
    const arr: number[] = [];
    for (let i: number = dimALength - 1; i >= 0; i--) {
      const element: number = value[i][j];
      arr.push(element);
    }
    output.push(arr);
  }

  return output;
}
