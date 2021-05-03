import { expect } from '@jest/globals'
import isPowerOfTwo from '../src/powerOfTwo'
test('n=1', () => {
  const n = 1
  const output = true
  expect(isPowerOfTwo(n)).toEqual(output)
})

test('n=16', () => {
  const n = 16
  const output = true
  expect(isPowerOfTwo(n)).toEqual(output)
})

test('n=3', () => {
  const n = 3
  const output = false
  expect(isPowerOfTwo(n)).toEqual(output)
})

test('n=4', () => {
  const n = 4
  const output = true
  expect(isPowerOfTwo(n)).toEqual(output)
})

test('n=5', () => {
  const n = 5
  const output = false
  expect(isPowerOfTwo(n)).toEqual(output)
})
test('n=2', () => {
  const n = 2
  const output = true
  expect(isPowerOfTwo(n)).toEqual(output)
})
