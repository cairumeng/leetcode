import { expect } from '@jest/globals'
import longestPalindrome from '../src/longestPalindromicSubstring'

test('s = "babad"', () => {
  const s = 'babad'
  const output = 'bab'
  expect(longestPalindrome(s)).toBe(output)
})

test('s = "cbbd"', () => {
  const s = 'cbbd'
  const output = 'bb'
  expect(longestPalindrome(s)).toBe(output)
})

test('s = "a"', () => {
  const s = 'a'
  const output = 'a'
  expect(longestPalindrome(s)).toBe(output)
})

test('s = "ac"', () => {
  const s = 'ac'
  const output = 'a'
  expect(longestPalindrome(s)).toBe(output)
})

test('s = "aa"', () => {
  const s = 'aa'
  const output = 'aa'
  expect(longestPalindrome(s)).toBe(output)
})

test('s = "abcc"', () => {
  const s = 'abcc'
  const output = 'cc'
  expect(longestPalindrome(s)).toBe(output)
})
test('s = "babaabab"', () => {
  const s = 'babaabab'
  const output = 'babaabab'
  expect(longestPalindrome(s)).toBe(output)
})
