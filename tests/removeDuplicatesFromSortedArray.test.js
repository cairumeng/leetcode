import { expect } from '@jest/globals'
import removeDuplicates from '../src/removeDuplicatesFromSortedArray'

test('[],target 0', () => {
  const nums = []
  const target = 0
  expect(removeDuplicates(nums)).toEqual(target)
})

test('[0],target 1', () => {
  const nums = [0]
  const target = 1
  expect(removeDuplicates(nums)).toEqual(target)
})

test('[1,1,2],target 2', () => {
  const nums = [1, 1, 2]
  const target = 2
  expect(removeDuplicates(nums)).toEqual(target)
  console.log(nums)
})

test('[0,0,1,1,1,2,2,3,3,4],target 5', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  const target = 5
  expect(removeDuplicates(nums)).toEqual(target)
  console.log(nums)
})

test('[0,0,0,0,0,0],target 5', () => {
  const nums = [0, 0, 0, 0, 0, 0]
  const target = 1
  expect(removeDuplicates(nums)).toEqual(target)
  console.log(nums)
})

test('[0,0,1,1,1,1,2],target 3', () => {
  const nums = [0, 0, 1, 1, 1, 1, 2]
  const target = 3
  expect(removeDuplicates(nums)).toEqual(target)
  console.log(nums)
})
