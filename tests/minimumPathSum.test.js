import { expect } from '@jest/globals'
import minPathSum from '../src/minimumPathSum'

test('grid = [[1,3,1],[1,5,1],[4,2,1]]', () => {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]
  const output = 7
  expect(minPathSum(grid)).toEqual(output)
})

test('grid = [[1,2,3],[4,5,6]]', () => {
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
  ]
  const output = 12
  expect(minPathSum(grid)).toEqual(output)
})

test('grid = [[1]]', () => {
  const grid = [[1]]
  const output = 1
  expect(minPathSum(grid)).toEqual(output)
})
test('grid = [[1],[2],[3]]', () => {
  const grid = [[1], [2], [3]]
  const output = 6
  expect(minPathSum(grid)).toEqual(output)
})

test('grid = [[1,2,3]]', () => {
  const grid = [[1, 2, 3]]
  const output = 6
  expect(minPathSum(grid)).toEqual(output)
})
