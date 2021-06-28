import { expect } from '@jest/globals'
import sortColors from '../src/sortColors'

test('nums = [2,0,2,1,1,0]', () => {
  const nums = [2, 0, 2, 1, 1, 0]
  const output = [0, 0, 1, 1, 2, 2]
  expect(sortColors(nums)).toEqual(output)
})

test('nums = [2,0,1]', () => {
  const nums = [2, 0, 1]
  const output = [0, 1, 2]
  expect(sortColors(nums)).toEqual(output)
})

test('nums = [0]', () => {
  const nums = [0]
  const output = [0]
  expect(sortColors(nums)).toEqual(output)
})

test('nums = [1]', () => {
  const nums = [1]
  const output = [1]
  expect(sortColors(nums)).toEqual(output)
})

test('nums = [1,1,1]', () => {
  const nums = [1, 1, 1]
  const output = [1, 1, 1]
  expect(sortColors(nums)).toEqual(output)
})
