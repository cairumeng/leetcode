import { expect } from '@jest/globals'
// import twoSum from '../src/twoSum'
import twoSum from '../src/twoSum2'

test('nums = [2,7,11,15], target = 9', () => {
  const nums = [2, 7, 11, 15]
  const target = 9

  expect(twoSum(nums, target).sort()).toEqual([0, 1])
})

test('nums = [3,2,4], target = 6', () => {
  const nums = [3, 2, 4]
  const target = 6
  expect(twoSum(nums, target).sort()).toEqual([1, 2])
})

test('nums = [3,3], target = 6', () => {
  const nums = [3, 3]
  const target = 6
  console.log(twoSum(nums, target))
  expect(twoSum(nums, target).sort()).toEqual([0, 1])
})

test('nums=[-11,-1,4,4,7,9], target=-4', () => {
  const nums = [-11, -1, 4, 4, 7, 9]
  const target = -4

  expect(twoSum(nums, target).sort()).toEqual([0, 4])
})

test('nums=[-11,-1,4,4,7,9], target=-4', () => {
  const nums = [-11, -1, 4, 4, 7, 9]
  const target = -4

  expect(twoSum(nums, target).sort()).toEqual([0, 4])
})

test('nums=[1,-7,0,-1,-9,12,19,100], target=11', () => {
  const nums = [1, -7, 0, -1, -9, 12, 19, 100]
  const target = 11
  expect(twoSum(nums, target).sort()).toEqual([3, 5])
})
