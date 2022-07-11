import {Matrix, matrixToClockwise} from './matrix-clockwise';

describe('matrixToClockwise', () => {
  it('1 x 1 matrix', () => {
    const matrix: Matrix = [[1]];
    const expected: Matrix = [[1]];
    const actual: Matrix = matrixToClockwise(matrix);
    expect(actual).toEqual(expected);
  });

  it('2 x 2 matrix', () => {
    const matrix: Matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected: Matrix = [
      [3, 1],
      [4, 2],
    ];
    const actual: Matrix = matrixToClockwise(matrix);
    expect(actual).toEqual(expected);
  });

  it('3 x 3 matrix', () => {
    const matrix: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected: Matrix = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    const actual: Matrix = matrixToClockwise(matrix);
    expect(actual).toEqual(expected);
  });

  it('1 x 2 matrix', () => {
    const matrix: Matrix = [[1, 2]];
    const expected: Matrix = [[1], [2]];
    const actual: Matrix = matrixToClockwise(matrix);
    expect(actual).toEqual(expected);
  });

  it('2 x 1 matrix', () => {
    const matrix: Matrix = [[1], [2]];
    const expected: Matrix = [[2, 1]];
    const actual: Matrix = matrixToClockwise(matrix);
    expect(actual).toEqual(expected);
  });

  it('3 x 5 matrix', () => {
    const matrix: Matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
    ];
    const expected: Matrix = [
      [11, 6, 1],
      [12, 7, 2],
      [13, 8, 3],
      [14, 9, 4],
      [15, 10, 5],
    ];
    const actual: Matrix = matrixToClockwise(matrix);
    expect(actual).toEqual(expected);
  });
});
