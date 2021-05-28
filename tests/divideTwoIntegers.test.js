import { expect } from '@jest/globals'
import divide from '../src/divideTwoIntegers'

test('dividend = 10, divisor = 3', () => {
  const dividend = 10,
    divisor = 3
  const output = 3
  expect(divide(dividend, divisor)).toEqual(output)
})

test('dividend = 7, divisor = -3', () => {
  const dividend = 7,
    divisor = -3
  const output = -2
  expect(divide(dividend, divisor)).toEqual(output)
})

test('dividend = 0, divisor = 1', () => {
  const dividend = 0,
    divisor = 1
  const output = 0
  expect(divide(dividend, divisor)).toEqual(output)
})

test('dividend = 1, divisor = 1', () => {
  const dividend = 1,
    divisor = 1
  const output = 1
  expect(divide(dividend, divisor)).toEqual(output)
})

test('dividend = -1, divisor = -1', () => {
  const dividend = -1,
    divisor = -1
  const output = 1
  expect(divide(dividend, divisor)).toEqual(output)
})
