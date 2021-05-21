import { expect } from '@jest/globals'
import myAtoi from '../src/atoi'

test('s = "42"', () => {
  const s = '42'
  const output = 42
  expect(myAtoi(s)).toEqual(output)
})

test('s = "   -42"', () => {
  const s = '   -42'
  const output = -42
  expect(myAtoi(s)).toEqual(output)
})

test('s = "4193 with words"', () => {
  const s = '4193 with words'
  const output = 4193
  expect(myAtoi(s)).toEqual(output)
})

test('s = "words and 987"', () => {
  const s = 'words and 987'
  const output = 0
  expect(myAtoi(s)).toEqual(output)
})

test('s = "-91283472332""', () => {
  const s = '-91283472332'
  const output = -2147483648
  expect(myAtoi(s)).toEqual(output)
})

test('s = "+1"', () => {
  const s = '+1'
  const output = 1
  expect(myAtoi(s)).toEqual(output)
})
