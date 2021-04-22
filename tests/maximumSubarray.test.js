import { expect } from '@jest/globals'
import maxSubArray from '../src/maximumSubarray'

test('nums = [-2,1,-3,4,-1,2,1,-5,4],target 6', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  const target = 6
  expect(maxSubArray(nums)).toEqual(target)
})

test('nums = [1],target 6', () => {
  const nums = [1]
  const target = 1
  expect(maxSubArray(nums)).toEqual(target)
})

test('nums = [5,4,-1,7,8],target 23', () => {
  const nums = [5, 4, -1, 7, 8]
  const target = 23
  expect(maxSubArray(nums)).toEqual(target)
})

test('nums = [-3,-2, -1,-1,-1],target 23', () => {
  const nums = [-3, -2, -1, -1, -1, -1]
  const target = -1
  expect(maxSubArray(nums)).toEqual(target)
})

test('nums = [6,-1,-1,-1,-1],target 23', () => {
  const nums = [6, -1, -1, -1, -1]
  const target = 6
  expect(maxSubArray(nums)).toEqual(target)
})

test('nums = [6,0,-7,-1,6,1],target 23', () => {
  const nums = [6, 0, -7, -1, 6, 1]
  const target = 7
  expect(maxSubArray(nums)).toEqual(target)
})
