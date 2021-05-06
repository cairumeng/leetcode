import { expect } from '@jest/globals'
import isPerfectSquare from '../src/validPerfectSquare'

test('num=16', () => {
  const num = 16
  expect(isPerfectSquare(num)).toEqual(true)
})
test('num=14', () => {
  const num = 14
  expect(isPerfectSquare(num)).toEqual(false)
})

test('num=1', () => {
  const num = 1
  expect(isPerfectSquare(num)).toEqual(true)
})
