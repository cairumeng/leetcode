import { expect } from '@jest/globals'
import nextPermutation from '../src/nextPermutation'

// test('nums = [1,2,3]', () => {
//   const nums = [1, 2, 3]
//   const output = [1, 3, 2]
//   expect(nextPermutation(nums)).toEqual(output)
// })

test('nums = [3,2,1]', () => {
  const nums = [3, 2, 1]
  const output = [1, 2, 3]
  expect(nextPermutation(nums)).toEqual(output)
})
