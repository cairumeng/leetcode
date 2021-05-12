import { expect } from '@jest/globals'
import assignCookies from '../src/assignCookies'

test('g = [1,2,3], s = [1,1]', () => {
  const g = [1, 2, 3],
    s = [1, 1]
  const output = 1
  expect(assignCookies(g, s)).toEqual(output)
})

test('g = [1,2], s = [1,2,3]', () => {
  const g = [1, 2],
    s = [1, 2, 3]
  const output = 2
  expect(assignCookies(g, s)).toEqual(output)
})

test('g = [1,4], s = [1,2,3]', () => {
  const g = [1, 4],
    s = [1, 2, 3]
  const output = 1
  expect(assignCookies(g, s)).toEqual(output)
})
