import { expect } from '@jest/globals'
import islandPerimeter from '../src/islandPerimeter'
test('grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]', () => {
  const grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]
  const output = 16
  expect(islandPerimeter(grid)).toEqual(output)
})

test('grid = [[1]]', () => {
  const grid = [[1]]
  const output = 4
  expect(islandPerimeter(grid)).toEqual(output)
})

test('grid = [[1,0]]', () => {
  const grid = [[1, 0]]
  const output = 4
  expect(islandPerimeter(grid)).toEqual(output)
})
