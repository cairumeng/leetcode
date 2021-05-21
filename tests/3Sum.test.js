import { expect } from '@jest/globals'
import threeSum from '../src/3Sum'

// test('nums = [-1,0,1,2,-1,-4]', () => {
//   const nums = [-1, 0, 1, 2, -1, -4]
//   const output = [
//     [-1, -1, 2],
//     [-1, 0, 1],
//   ]
//   expect(threeSum(nums)).toEqual(output)
// })

// test('nums = []', () => {
//   const nums = []
//   const output = []
//   expect(threeSum(nums)).toEqual(output)
// })

// test('nums = [0]', () => {
//   const nums = [0]
//   const output = []
//   expect(threeSum(nums)).toEqual(output)
// })

// test('nums = [0,0,0]', () => {
//   const nums = [0, 0, 0]
//   const output = [[0, 0, 0]]
//   expect(threeSum(nums)).toEqual(output)
// })

test('nums = [0,0,0]', () => {
  const nums = [0, 0, 0, 0, 0, 0, 2, 3]
  const output = [[0, 0, 0]]
  expect(threeSum(nums)).toEqual(output)
})
