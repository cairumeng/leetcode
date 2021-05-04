import { expect } from '@jest/globals'
import missingNumber from '../src/missingNumber'

test('nums', () => {
  const nums = [3, 0, 1]
  const output = 2
  expect(missingNumber(nums)).toEqual(output)
})
test('nums', () => {
  const nums = [0, 1]
  const output = 2
  expect(missingNumber(nums)).toEqual(output)
})
test('nums', () => {
  const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
  const output = 8
  expect(missingNumber(nums)).toEqual(output)
})

test('nums', () => {
  const nums = [0]
  const output = 1
  expect(missingNumber(nums)).toEqual(output)
})
