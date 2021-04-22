import { expect } from '@jest/globals'
import searchInsert from '../src/searchInsertPosition'

test('nums = [1,3,5,6], target = 5,output 2', () => {
  const nums = [1, 3, 5, 6]
  const target = 5
  const output = 2
  expect(searchInsert(nums, target)).toEqual(output)
})

test('nums = [1,3,5,6], target = 2, output 1', () => {
  const nums = [1, 3, 5, 6]
  const target = 2
  const output = 1
  expect(searchInsert(nums, target)).toEqual(output)
})

test('nums = [1,3,5,6], target = 7, output 4', () => {
  const nums = [1, 3, 5, 6]
  const target = 7
  const output = 4
  expect(searchInsert(nums, target)).toEqual(output)
})

test('nums = [1,3,5,6], target = 0, output 0', () => {
  const nums = [1, 3, 5, 6]
  const target = 0
  const output = 0
  expect(searchInsert(nums, target)).toEqual(output)
})

test('nums = [1], target = 0, output 0', () => {
  const nums = [1]
  const target = 0
  const output = 0
  expect(searchInsert(nums, target)).toEqual(output)
})
