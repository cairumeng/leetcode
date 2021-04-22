import { expect } from '@jest/globals'
import isPalindrome from '../src/validPalindrome'

test('"A man, a plan, a canal: Panama"', () => {
  const s = 'A man, a plan, a canal: Panama'
  expect(isPalindrome(s)).toEqual(true)
})

test('s = "race a car""', () => {
  const s = 'race a car'
  expect(isPalindrome(s)).toEqual(false)
})

test('s = "0P"', () => {
  const s = '0P'
  expect(isPalindrome(s)).toEqual(false)
})

test('s = " "', () => {
  const s = 'ab_a'
  expect(isPalindrome(s)).toEqual(true)
})
