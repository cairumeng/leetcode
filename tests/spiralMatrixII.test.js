import { expect } from '@jest/globals'
import generateMatrix from '../src/spiralMatrixII'

test('n=3', () => {
  const n = 3
  const output = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]
  expect(generateMatrix(n)).toEqual(output)
})

test('n=4', () => {
  const n = 4
  const output = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ]
  expect(generateMatrix(n)).toEqual(output)
})
