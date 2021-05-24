import { expect } from '@jest/globals'
import fourSum from '../src/4Sum'

// test('nums = [1,0,-1,0,-2,2], target = 0', () => {
//   const nums = [1, 0, -1, 0, -2, 2]
//   const target = 0
//   const output = [
//     [-2, -1, 1, 2],
//     [-2, 0, 0, 2],
//     [-1, 0, 0, 1],
//   ]
//   expect(fourSum(nums, target)).toEqual(output)
// })

// test('nums = [2,2,2,2,2], target = 8', () => {
//   const nums = [2, 2, 2, 2, 2]
//   const target = 8
//   const output = [[2, 2, 2, 2]]
//   expect(fourSum(nums, target)).toEqual(output)
// })

test('nums = [2,2,2,2,2], target = 8', () => {
  const nums = [-1, 0, -5, -2, -2, -4, 0, 1, -2]

  const target = -9
  const output = [
    [-5, -4, -1, 1],
    [-5, -4, 0, 0],
    [-5, -2, -2, 0],
    [-4, -2, -2, -1],
  ]
  expect(fourSum(nums, target)).toEqual(output)
})
