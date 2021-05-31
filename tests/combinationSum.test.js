import { expect } from '@jest/globals'
import combinationSum from '../src/combinationSum'

test('candidates = [2,3,6,7], target = 7', () => {
  const candidates = [2, 3, 6, 7],
    target = 7
  const output = [[2, 2, 3], [7]]

  expect(combinationSum(candidates, target)).toEqual(output)
})

test('candidates = [2,3,5], target = 8', () => {
  const candidates = [2, 3, 5],
    target = 8
  const output = [
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ]

  expect(combinationSum(candidates, target)).toEqual(output)
})

test('candidates = [2], target = 1', () => {
  const candidates = [2],
    target = 1
  const output = []

  expect(combinationSum(candidates, target)).toEqual(output)
})

test('candidates = [1], target = 1', () => {
  const candidates = [1],
    target = 1
  const output = [[1]]

  expect(combinationSum(candidates, target)).toEqual(output)
})

test('candidates = [1,2,3,4], target = 10', () => {
  const candidates = [1, 2, 3, 4],
    target = 10
  const output = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 3],
    [1, 1, 1, 1, 1, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 4],
    [1, 1, 1, 1, 1, 2, 3],
    [1, 1, 1, 1, 2, 2, 2],
    [1, 1, 1, 1, 2, 4],
    [1, 1, 1, 1, 3, 3],
    [1, 1, 1, 2, 2, 3],
    [1, 1, 1, 3, 4],
    [1, 1, 2, 2, 2, 2],
    [1, 1, 2, 2, 4],
    [1, 1, 2, 3, 3],
    [1, 1, 4, 4],
    [1, 2, 2, 2, 3],
    [1, 2, 3, 4],
    [1, 3, 3, 3],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 4],
    [2, 2, 3, 3],
    [2, 4, 4],
    [3, 3, 4],
  ]
  expect(combinationSum(candidates, target).sort()).toEqual(output.sort())
})
