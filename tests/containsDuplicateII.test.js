import { expect } from '@jest/globals'
import containsNearbyDuplicate from '../src/containsDuplicateII'

test('nums = [1,2,3,1]', () => {
  const nums = [1, 2, 3, 1]
  const k = 3
  const output = true
  expect(containsNearbyDuplicate(nums, k)).toEqual(output)
})

test('nums = [1,0,1,1]', () => {
  const nums = [1, 0, 1, 1]
  const k = 1
  const output = true
  expect(containsNearbyDuplicate(nums, k)).toEqual(output)
})

test('nums = [1,2,3,1,2,3]', () => {
  const nums = [1, 2, 3, 1, 2, 3]
  const k = 2
  const output = false
  expect(containsNearbyDuplicate(nums, k)).toEqual(output)
})

test('nums = [1]', () => {
  const nums = [1]
  const k = 3
  const output = false
  expect(containsNearbyDuplicate(nums, k)).toEqual(output)
})

test('nums = [1,2,1]', () => {
  const nums = [1, 2, 1]
  const k = 1
  const output = false
  expect(containsNearbyDuplicate(nums, k)).toEqual(output)
})

test('nums = [1,2,3,4,5,6,7,8,9,9]', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
  const k = 3
  const output = true
  expect(containsNearbyDuplicate(nums, k)).toEqual(output)
})
