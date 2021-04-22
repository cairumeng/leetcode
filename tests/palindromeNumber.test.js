import { expect } from '@jest/globals'
import isPalindrome from '../src/palindromeNumber'

test(' 0 is panlindrome,target true', () => {
  const x = 0
  expect(isPalindrome(x)).toEqual(true)
})

test('1 is panlindrome,target true', () => {
  const x = 1
  expect(isPalindrome(x)).toEqual(true)
})

test('-1 is panlindrome,target false', () => {
  const x = -1
  expect(isPalindrome(x)).toEqual(false)
})

test('121 is panlindrome,target true', () => {
  const x = 121
  expect(isPalindrome(x)).toEqual(true)
})

test('-121 is panlindrome,target false', () => {
  const x = -121
  expect(isPalindrome(x)).toEqual(false)
})

test('10 is panlindrome,target false', () => {
  const x = 10
  expect(isPalindrome(x)).toEqual(false)
})

test('-101 is panlindrome,target false', () => {
  const x = -101
  expect(isPalindrome(x)).toEqual(false)
})

test('1000021 is panlindrome,target false', () => {
  const x = 1000021
  expect(isPalindrome(x)).toEqual(false)
})
