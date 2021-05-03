import { expect } from '@jest/globals'
import isPalindrome from '../src/palindromeLinkedList'

test(' head = [1,2,2,1],target true', () => {
  const head = {
    val: 1,
    next: { val: 2, next: { val: 2, next: { val: 1, next: null } } },
  }
  expect(isPalindrome(head)).toEqual(true)
})
test(' head = [1,2],target true', () => {
  const head = {
    val: 1,
    next: { val: 2, next: null },
  }
  expect(isPalindrome(head)).toEqual(false)
})

test(' head = [1],target true', () => {
  const head = {
    val: 1,
    next: null,
  }
  expect(isPalindrome(head)).toEqual(true)
})

test(' head = [1],target true', () => {
  const head = {
    val: 1,
    next: { val: 2, next: { val: 1, next: null } },
  }
  expect(isPalindrome(head)).toEqual(true)
})
