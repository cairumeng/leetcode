import { expect } from '@jest/globals'
import repeatedSubstringPattern from '../src/repeatedSubstringPattern'

test(' s = "abab"', () => {
  const s = 'abab'
  const output = true
  expect(repeatedSubstringPattern(s)).toEqual(output)
})
test(' s = "aba"', () => {
  const s = 'aba'
  const output = false
  expect(repeatedSubstringPattern(s)).toEqual(output)
})

test(' s = "abcabcabc"', () => {
  const s = 'abcabcabc'
  const output = true
  expect(repeatedSubstringPattern(s)).toEqual(output)
})
