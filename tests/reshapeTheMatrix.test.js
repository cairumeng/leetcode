import { expect } from '@jest/globals'
import matrixReshape from '../src/reshapeTheMatrix'

test('mat = [[1,2],[3,4]], r = 1, c = 4', () => {
  const mat = [
      [1, 2],
      [3, 4],
    ],
    r = 1,
    c = 4
  const output = [[1, 2, 3, 4]]
  expect(matrixReshape(mat, r, c)).toEqual(output)
})

test('mat = [[1,2],[3,4]], r = 2, c = 4', () => {
  const mat = [
      [1, 2],
      [3, 4],
    ],
    r = 2,
    c = 4
  const output = [
    [1, 2],
    [3, 4],
  ]
  expect(matrixReshape(mat, r, c)).toEqual(output)
})
test('mat = [[1,2,3,4],[5,6,7,8]], r = 2, c = 4', () => {
  const mat = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ],
    r = 4,
    c = 2
  const output = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]
  expect(matrixReshape(mat, r, c)).toEqual(output)
})
test('mat = [[1,2,3,4],[5,6,7,8]], r = 2, c = 4', () => {
  const mat = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ],
    r = 4,
    c = 3
  const output = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]
  expect(matrixReshape(mat, r, c)).toEqual(output)
})

test('mat = [[1],[5]], r = 1, c = 2', () => {
  const mat = [[1], [5]],
    r = 1,
    c = 2
  const output = [[1, 5]]
  expect(matrixReshape(mat, r, c)).toEqual(output)
})
