import { expect } from '@jest/globals'
import isUgly from '../src/uglyNumber'

test('n=6', () => {
  const n = 6
  const output = true
  expect(isUgly(n)).toEqual(output)
})

test('n=8', () => {
  const n = 8
  const output = true
  expect(isUgly(n)).toEqual(output)
})
test('n=1', () => {
  const n = 1
  const output = true
  expect(isUgly(n)).toEqual(output)
})

test('n=25', () => {
  const n = 25
  const output = true
  expect(isUgly(n)).toEqual(output)
})
test('n=50', () => {
  const n = 50
  const output = true
  expect(isUgly(n)).toEqual(output)
})

test('n=35', () => {
  const n = 35
  const output = false
  expect(isUgly(n)).toEqual(output)
})

test('n=0', () => {
  const n = 0
  const output = true
  expect(isUgly(n)).toEqual(output)
})
