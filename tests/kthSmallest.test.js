import { expect } from '@jest/globals'
import kthSmallest from '../src/kthSmallestElement'

test('matrix = [[1,5,9],[10,11,13],[12,13,15]]', () => {
  const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    k = 8
  const output = 13

  expect(kthSmallest(matrix, k)).toEqual(output)
})

test('matrix = [[1,5,9],[10,11,13],[12,13,15]]', () => {
  const matrix = [[-5]],
    k = 1
  const output = -5

  expect(kthSmallest(matrix, k)).toEqual(output)
})
