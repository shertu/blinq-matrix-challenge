export type Matrix = number[][];

/**
 * Will re-order and re-shape a matrix to "rotate it clockwise."
 */
export function matrixToClockwise(value: Matrix): Matrix {
  // get dimensions of tensor
  const dimA: number = value.length;
  const dimB: number = value[0].length;

  // push all information to a buffer
  const buffer: number[] = [];
  for (let i = 0; i < value.length; i++) {
    const arr: number[] = value[i];
    for (let j = 0; j < arr.length; j++) {
      buffer.push(arr[j]);
    }
  }

  // re-order elements in buffer
  const reordered: number[] = [];
  for (let i = 0; i < dimB; i++) {
    for (let j = dimA - 1; j >= 0; j--) {
      const element: number = buffer[j * dimB + i];
      reordered.push(element);
    }
  }

  // re-build matrix with re-shapped dimensions
  const output: Matrix = [];
  for (let i = 0; i < dimB; i++) {
    const arr: number[] = [];
    for (let j = 0; j < dimA; j++) {
      const element: number = reordered[i * dimA + j];
      arr.push(element);
    }
    output.push(arr);
  }

  return output;
}
