import { expect } from '@jest/globals'
import twoSum from '../src/twoSumII'

test('nums = [2,7,11,15], target = 9', () => {
  const nums = [2, 7, 11, 15]
  const target = 9
  const output = [1, 2]
  expect(twoSum(nums, target)).toEqual(output)
})

test('numbers = [2,3,4], target = 6', () => {
  const nums = [2, 3, 4]
  const target = 6
  const output = [1, 3]
  expect(twoSum(nums, target)).toEqual(output)
})

test('numbers = [-1,0], target = -1', () => {
  const nums = [-1, 0]
  const target = -1
  const output = [1, 2]
  expect(twoSum(nums, target)).toEqual(output)
})

test('numbers = [0,0,3,4], target = 0', () => {
  const nums = [0, 0, 3, 4]
  const target = 0
  const output = [1, 2]
  expect(twoSum(nums, target)).toEqual(output)
})
