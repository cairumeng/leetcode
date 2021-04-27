import { expect } from '@jest/globals'
import traillingZeros from '../src/traillingZeros'

test('nums = 5, target = 1', () => {
  expect(traillingZeros(5)).toEqual(1)
})
test('nums = 4, target = 0', () => {
  expect(traillingZeros(4)).toEqual(0)
})

test('nums = 25, target = 6', () => {
  expect(traillingZeros(25)).toEqual(6)
})

test('nums = 50, target = 12', () => {
  expect(traillingZeros(50)).toEqual(12)
})

test('nums = 200, target = 12', () => {
  expect(traillingZeros(200)).toEqual(49)
})
