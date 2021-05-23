import { expect } from '@jest/globals'
import threeSumCloset from '../src/3SumClosest'

// test('nums = [-1,2,1,-4]', () => {
//   const nums = [-1, 2, 1, -4]
//   const target = 1
//   const output = 2
//   expect(threeSumCloset(nums, target)).toEqual(output)
// })

test('nums = [0,2,1,-3]', () => {
  const nums = [0, 2, 1, -3]
  const target = 1
  const output = 0
  expect(threeSumCloset(nums, target)).toEqual(output)
})
