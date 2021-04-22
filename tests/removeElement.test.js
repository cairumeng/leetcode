import { expect } from '@jest/globals'
import removeElement from '../src/removeElement'

test('[],val=0', () => {
  const nums = []
  const val = 0
  const target = 0
  expect(removeElement(nums, val)).toEqual(target)
  console.log(nums)
})

test('[0],val=0', () => {
  const nums = [0]
  const val = 0
  const target = 0
  expect(removeElement(nums, val)).toEqual(target)
  console.log(nums)
})

test('[0,0],val=0', () => {
  const nums = [0, 0]
  const val = 0
  const target = 0
  expect(removeElement(nums, val)).toEqual(target)
  console.log(nums)
})

test('[1,1,2],val=1', () => {
  const nums = [1, 1, 2]
  const val = 1
  const target = 1
  expect(removeElement(nums, val)).toEqual(target)
  console.log(nums)
})

test('[0,0,1,1,1,2,2,3,3,4],val=1', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  const val = 1
  const target = 7
  expect(removeElement(nums, val)).toEqual(target)
  console.log(nums)
})

test('[3,2,2,3],val=3', () => {
  const nums = [3, 2, 2, 3]
  const val = 3
  const target = 2
  expect(removeElement(nums, val)).toEqual(target)
  console.log(nums)
})
