import { expect } from '@jest/globals'
import isPowerOfFour from '../src/powerOfFour'
test('n=0', () => {
  const n = 0
  const output = false
  expect(isPowerOfFour(n)).toEqual(output)
})

test('n=1', () => {
  const n = 1
  const output = true
  expect(isPowerOfFour(n)).toEqual(output)
})
test('n=2', () => {
  const n = 2
  const output = false
  expect(isPowerOfFour(n)).toEqual(output)
})

test('n=4', () => {
  const n = 4
  const output = true
  expect(isPowerOfFour(n)).toEqual(output)
})

test('n=8', () => {
  const n = 8
  const output = false
  expect(isPowerOfFour(n)).toEqual(output)
})
test('n=5', () => {
  const n = 5
  const output = false
  expect(isPowerOfFour(n)).toEqual(output)
})

test('n=16', () => {
  const n = 16
  const output = true
  expect(isPowerOfFour(n)).toEqual(output)
})
test('n=6', () => {
  const n = 6
  const output = false
  expect(isPowerOfFour(n)).toEqual(output)
})
