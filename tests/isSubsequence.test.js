import { expect } from '@jest/globals'
import isSubsequence from '../src/isSubsequence'

test('s = "abc", t = "ahbgdc"', () => {
  const s = 'abc',
    t = 'ahbgdc'
  const output = true
  expect(isSubsequence(s, t)).toEqual(output)
})

test('s = "axc", t = "ahbgdc"', () => {
  const s = 'axc',
    t = 'ahbgdc'
  const output = false
  expect(isSubsequence(s, t)).toEqual(output)
})
