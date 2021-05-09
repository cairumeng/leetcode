import { expect } from '@jest/globals'
import findTheDifference from '../src/findTheDifference'

test('s = "abcd", t = "abcde"', () => {
  const s = 'abcd',
    t = 'abcde'
  const output = 'e'
  expect(findTheDifference(s, t)).toEqual(output)
})

test('s = "", t = "y"', () => {
  const s = '',
    t = 'y'
  const output = 'y'
  expect(findTheDifference(s, t)).toEqual(output)
})

test('s = "ae", t = "aea"', () => {
  const s = 'ae',
    t = 'aea'
  const output = 'a'
  expect(findTheDifference(s, t)).toEqual(output)
})
