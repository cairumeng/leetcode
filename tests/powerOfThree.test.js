import { expect } from '@jest/globals'
import isPowerOfThree from '../src/powerOfThree'
test('n=1', () => {
  const n = 1
  const output = false
  expect(isPowerOfThree(n)).toEqual(output)
})
test('n=0', () => {
  const n = 0
  const output = false
  expect(isPowerOfThree(n)).toEqual(output)
})
test('n=27', () => {
  const n = 27
  const output = true
  expect(isPowerOfThree(n)).toEqual(output)
})

test('n=9', () => {
  const n = 9
  const output = true
  expect(isPowerOfThree(n)).toEqual(output)
})

test('n=45', () => {
  const n = 45
  const output = false
  expect(isPowerOfThree(n)).toEqual(output)
})
