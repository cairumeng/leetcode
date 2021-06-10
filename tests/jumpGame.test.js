import { expect } from '@jest/globals'
import canJump from '../src/jumpGame'

test('nums = [2,3,1,1,4]', () => {
  const nums = [2, 3, 1, 1, 4]
  expect(canJump(nums)).toEqual(true)
})

test('nums = [3,2,1,0,4]', () => {
  const nums = [3, 2, 1, 0, 4]
  expect(canJump(nums)).toEqual(false)
})

test('nums = [1,0,3,1,1,4]', () => {
  const nums = [1, 0, 3, 1, 1, 4]
  expect(canJump(nums)).toEqual(false)
})

test('nums = [5,0,3,1,1,4]', () => {
  const nums = [5, 0, 3, 1, 1, 4]
  expect(canJump(nums)).toEqual(true)
})

test('nums = [0]', () => {
  const nums = [0]
  expect(canJump(nums)).toEqual(true)
})
test('nums = [1]', () => {
  const nums = [1]
  expect(canJump(nums)).toEqual(true)
})

test('nums = [1,1]', () => {
  const nums = [1]
  expect(canJump(nums)).toEqual(true)
})

test('nums = [1,0]', () => {
  const nums = [1, 0]
  expect(canJump(nums)).toEqual(true)
})

test('nums = [1,0,0]', () => {
  const nums = [1, 0, 0]
  expect(canJump(nums)).toEqual(false)
})
