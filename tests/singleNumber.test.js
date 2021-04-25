import { expect } from '@jest/globals'
import singleNumber from '../src/singleNumber'

test('nums = [2,2,1]', () => {
  const nums = [2, 2, 1]
  const output = 1
  expect(singleNumber(nums)).toEqual(output)
})

test('nums = [4,1,2,1,2]', () => {
  const nums = [4, 1, 2, 1, 2]
  const output = 4
  expect(singleNumber(nums)).toEqual(output)
})

test('nums = [1]', () => {
  const nums = [1]
  const output = 1
  expect(singleNumber(nums)).toEqual(output)
})
