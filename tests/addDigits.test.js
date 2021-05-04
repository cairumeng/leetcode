import { expect } from '@jest/globals'
import addDigits from '../src/addDigits'

test('num=38', () => {
  const num = 38
  const output = 2
  expect(addDigits(num)).toEqual(output)
})

test('num=0', () => {
  const num = 0
  const output = 0
  expect(addDigits(num)).toEqual(output)
})
test('num=111', () => {
  const num = 111
  const output = 3
  expect(addDigits(num)).toEqual(output)
})
