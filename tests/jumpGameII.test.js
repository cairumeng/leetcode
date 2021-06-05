import { expect } from '@jest/globals'
import jump from '../src/jumpGameII'

test('nums = [2,3,1,1,4]', () => {
  const nums = [2, 3, 1, 1, 4]
  const output = 2
  expect(jump(nums)).toEqual(output)
})

test('nums = [2,3,0,1,4]', () => {
  const nums = [2, 3, 0, 1, 4]
  const output = 2
  expect(jump(nums)).toEqual(output)
})

test('nums = [6,0,2,3,1,1,4,6,0,2,3,1,1,4]', () => {
  const nums = [6, 0, 2, 3, 1, 4, 6, 0, 2, 3, 1, 1, 4]
  const output = 2
  expect(jump(nums)).toEqual(output)
})

test('nums = [5,9,3,2,1,0,2,3,4,1,0,0,0]', () => {
  const nums = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]
  const output = 3
  expect(jump(nums)).toEqual(output)
})

test('nums = [2,1,3,1,0,0]', () => {
  const nums = [2, 1, 3, 1, 0, 0]
  const output = 2
  expect(jump(nums)).toEqual(output)
})
