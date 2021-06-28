setZeroes
import { expect } from '@jest/globals'
import setZeroes from '../src/setMatrixZeroes'

test('matrix = [[1,1,1],[1,0,1],[1,1,1]]', () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]
  const output = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]
  expect(JSON.stringify(setZeroes(matrix))).toEqual(JSON.stringify(output))
})

test('matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', () => {
  const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]
  const output = [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]
  expect(JSON.stringify(setZeroes(matrix))).toEqual(JSON.stringify(output))
})
