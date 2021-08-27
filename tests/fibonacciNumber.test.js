import { expect } from '@jest/globals'
import fib from '../src/fibonacciNumber.js'

test('n=2', () => {
  expect(fib(2)).toEqual(1)
})

test('n=3', () => {
  expect(fib(3)).toEqual(2)
})

test('n=4', () => {
  expect(fib(4)).toEqual(3)
})

test('n=11', () => {
  expect(fib(11)).toEqual(89)
})
