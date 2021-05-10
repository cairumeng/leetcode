import { expect } from '@jest/globals'
import longestPalindrome from '../src/longestPalindrome'

test('s = "abccccdd"', () => {
  const s = 'abccccdd'
  const output = 7
  expect(longestPalindrome(s)).toBe(output)
})
test('s = "aba"', () => {
  const s = 'aba'
  const output = 3
  expect(longestPalindrome(s)).toBe(output)
})
