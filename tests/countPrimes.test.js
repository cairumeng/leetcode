import { expect } from '@jest/globals'
import countPrimes from '../src/countPrimes'

test('n=10', () => {
  const n = 10
  const output = 4
  expect(countPrimes(n)).toEqual(output)
})

test('n=0', () => {
  const n = 0
  const output = 0
  expect(countPrimes(n)).toEqual(output)
})

test('n=1', () => {
  const n = 1
  const output = 0
  expect(countPrimes(n)).toEqual(output)
})

test('n=2', () => {
  const n = 2
  const output = 0
  expect(countPrimes(n)).toEqual(output)
})
test('n=11', () => {
  const n = 11
  const output = 4
  expect(countPrimes(n)).toEqual(output)
})

test('n=12', () => {
  const n = 12
  const output = 5
  expect(countPrimes(n)).toEqual(output)
})

test('n=13', () => {
  const n = 13
  const output = 5
  expect(countPrimes(n)).toEqual(output)
})
