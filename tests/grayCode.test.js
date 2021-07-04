import { expect } from '@jest/globals'
import grayCode from '../src/grayCode'

test('n=2', () => {
  const n = 2
  const output = [0, 1, 3, 2]
  expect(grayCode(n)).toEqual(output)
})

test('n=1', () => {
  const n = 1
  const output = [0, 1]
  expect(grayCode(n)).toEqual(output)
})

test('n=3', () => {
  const n = 3
  const output = [0, 1, 3, 2, 6, 7, 5, 4]
  expect(grayCode(n)).toEqual(output)
})

test('n=4', () => {
  const n = 4
  const output = [0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8]
  expect(grayCode(n)).toEqual(output)
})
