import { expect } from '@jest/globals'
import rotate from '../src/rotateArray'

test(' nums = [1,2,3,4,5,6,7], k = 3', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3
  rotate(nums, k)
  const output = [5, 6, 7, 1, 2, 3, 4]
  expect(nums).toEqual(output)
})

test(' nums = [-1], k = 2', () => {
  const nums = [-1],
    k = 2
  rotate(nums, k)
  const output = [-1]
  expect(nums).toEqual(output)
})
