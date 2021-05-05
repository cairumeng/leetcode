import { expect } from '@jest/globals'
import moveZeroes from '../src/moveZeroes'

test('nums = [0,1,0,3,12]', () => {
  const nums = [0, 1, 0, 3, 12]
  const output = [1, 3, 12, 0, 0]
  expect(moveZeroes(nums)).toEqual(output)
})

test('nums = [0]', () => {
  const nums = [0]
  const output = [0]
  expect(moveZeroes(nums)).toEqual(output)
})

test('nums = [0,0,1]', () => {
  const nums = [0, 0, 1]
  const output = [1, 0, 0]
  expect(moveZeroes(nums)).toEqual(output)
})
