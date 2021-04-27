import { expect } from '@jest/globals'
import majorityElement from '../src/majorityElement'

test('nums=[3,2,3]', () => {
  const nums = [3, 2, 3]
  const output = 3
  expect(majorityElement(nums)).toEqual(output)
})

test('nums=[2,2,1,1,1,2,2]', () => {
  const nums = [2, 2, 1, 1, 1, 2, 2]
  const output = 2
  expect(majorityElement(nums)).toEqual(output)
})

test('nums=[2,2,1,1,1,2,2]', () => {
  const nums = [1, 2, 1, 1, 1, 2, 2]
  const output = 1
  expect(majorityElement(nums)).toEqual(output)
})

test('nums=[2]', () => {
  const nums = [2]
  const output = 2
  expect(majorityElement(nums)).toEqual(output)
})

test('nums=[3,3,4]', () => {
  const nums = [3, 3, 4]
  const output = 3
  expect(majorityElement(nums)).toEqual(output)
})

test('nums=[6,5,5]', () => {
  const nums = [6, 5, 5]
  const output = 5
  expect(majorityElement(nums)).toEqual(output)
})
