import { expect } from '@jest/globals'
import removeNthFromEnd from '../src/removeNthNodeFromEndOfList'

test('head = [1,2,3,4,5]', () => {
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: { val: 5, next: null },
        },
      },
    },
  }
  const n = 2
  const output = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: { val: 5, next: null },
      },
    },
  }
  expect(removeNthFromEnd(head, n)).toEqual(output)
})

test('head = [1]', () => {
  const head = {
    val: 1,
    next: null,
  }
  const n = 1
  const output = null
  expect(removeNthFromEnd(head, n)).toEqual(output)
})
