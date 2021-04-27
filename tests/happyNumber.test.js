import { expect } from '@jest/globals'
import isHappy from '../src/happyNumber'

test('n=19 ', () => {
  const n = 19
  const output = true
  expect(isHappy(n)).toEqual(output)
})

test('n=2 ', () => {
  const n = 2
  const output = false
  expect(isHappy(n)).toEqual(output)
})

test('n=7 ', () => {
  const n = 7
  const output = true
  expect(isHappy(n)).toEqual(output)
})

test('n=3 ', () => {
  const n = 3
  const output = false
  expect(isHappy(n)).toEqual(output)
})
