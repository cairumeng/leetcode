import { expect } from '@jest/globals'
import search from '../src/searchInRotatedSortedArray'

test(' nums = [4,5,6,7,0,1,2], target = 0', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 0
  const output = 4
  expect(search(nums, target)).toEqual(output)
})

test(' nums = [4,5,6,7,0,1,2], target = 3', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 3
  const output = -1
  expect(search(nums, target)).toEqual(output)
})

test(' nums = [4,5,6,7,0,1,2], target = 2', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 2
  const output = 6
  expect(search(nums, target)).toEqual(output)
})

test(' nums = [4,5,6,7,0,1,2], target = 4', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 4
  const output = 0
  expect(search(nums, target)).toEqual(output)
})
test(' nums = [0,1,2,4,5,6,7], target = 3', () => {
  const nums = [0, 1, 2, 4, 5, 6, 7]
  const target = 3
  const output = -1
  expect(search(nums, target)).toEqual(output)
})

test(' nums = [0,1,2,4,5,6,7], target = 7', () => {
  const nums = [0, 1, 2, 4, 5, 6, 7]
  const target = 7
  const output = 6
  expect(search(nums, target)).toEqual(output)
})

test(' nums = [1], target = 0', () => {
  const nums = [1]
  const target = 0
  const output = -1
  expect(search(nums, target)).toEqual(output)
})

test(' nums = [1,3], target = 0', () => {
  const nums = [1, 3]
  const target = 0
  const output = -1
  expect(search(nums, target)).toEqual(output)
})

test(' nums = [1,3], target = 3', () => {
  const nums = [1, 3]
  const target = 3
  const output = 1
  expect(search(nums, target)).toEqual(output)
})
