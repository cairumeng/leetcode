import { expect } from '@jest/globals'
import hammingDistance from '../src/hammingDistance'

test('x = 1, y = 4 ', () => {
  const x = 1,
    y = 4
  const output = 2
  expect(hammingDistance(x, y)).toEqual(output)
})

test('x = 3, y = 1 ', () => {
  const x = 3,
    y = 1
  const output = 1
  expect(hammingDistance(x, y)).toEqual(output)
})
