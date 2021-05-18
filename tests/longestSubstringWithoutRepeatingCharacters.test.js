import { expect } from '@jest/globals'
import lengthOfLongestSubstring from '../src/longestSubstringWithoutRepeatingCharacters'

test(' s = "abcabcbb"', () => {
  const s = 'abcabcbb'
  const output = 3
  expect(lengthOfLongestSubstring(s)).toBe(output)
})

test(' s = "bbbb"', () => {
  const s = 'bbbb'
  const output = 1
  expect(lengthOfLongestSubstring(s)).toBe(output)
})

test(' s = "pwwkew"', () => {
  const s = 'pwwkew'
  const output = 3
  expect(lengthOfLongestSubstring(s)).toBe(output)
})

test(' s = ""', () => {
  const s = ''
  const output = 0
  expect(lengthOfLongestSubstring(s)).toBe(output)
})

test(' s = "ababcabcd"', () => {
  const s = 'ababcabcd'
  const output = 4
  expect(lengthOfLongestSubstring(s)).toBe(output)
})

test(' s = "dvdf"', () => {
  const s = 'dvdf'
  const output = 3
  expect(lengthOfLongestSubstring(s)).toBe(output)
})
