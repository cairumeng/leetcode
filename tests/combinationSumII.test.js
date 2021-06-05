import { expect } from '@jest/globals'
import combinationSum2 from '../src/combinationSumII'

test('candidates = [10,1,2,7,6,1,5], target = 8', () => {
  const candidates = [10, 1, 2, 7, 6, 1, 5]
  const target = 8
  const output = [
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ]

  expect(combinationSum2(candidates, target)).toEqual(output)
})

test('candidates = [1,1,1,2,5,6], target = 8', () => {
  const candidates = [1, 1, 1, 2, 5, 6]
  const target = 8
  const output = [
    [1, 1, 1, 5],
    [1, 1, 6],
    [1, 2, 5],
    [2, 6],
  ]

  expect(combinationSum2(candidates, target)).toEqual(output)
})

test('candidates = [2,5,2,1,2], target = 5', () => {
  const candidates = [2, 5, 2, 1, 2]
  const target = 5
  const output = [[1, 2, 2], [5]]

  expect(combinationSum2(candidates, target)).toEqual(output)
})
