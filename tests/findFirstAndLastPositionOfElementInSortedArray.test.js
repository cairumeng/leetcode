import { expect } from '@jest/globals'
import searchRange from '../src/findFirstAndLastPositionOfElementInSortedArray'

test('nums = [5,7,7,8,8,10]', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8
  const output = [3, 4]
  console.log
  expect(searchRange(nums, target)).toEqual(output)
})

test('nums = [5,7,7,8,8,10]', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 6

  const output = [-1, -1]
  expect(searchRange(nums, target)).toEqual(output)
})

test('nums = []', () => {
  const nums = []
  const target = 0
  const output = [-1, -1]
  expect(searchRange(nums, target)).toEqual(output)
})

test('nums = [5,7,7,8,8,10]', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 5
  const output = [0, 0]

  expect(searchRange(nums, target)).toEqual(output)
})

test('nums = [5,7,7,8,8,10]', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 10
  const output = [5, 5]
  expect(searchRange(nums, target)).toEqual(output)
})
