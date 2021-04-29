import { expect } from '@jest/globals'
import removeElement from '../src/removeLinkedListElements'

test('head = [1,2,6,3,4,5,6], val = 6', () => {
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 6,
        next: {
          val: 3,
          next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
        },
      },
    },
  }
  const val = 6
  const output = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: { val: 4, next: { val: 5, next: null } },
      },
    },
  }
  expect(removeElement(head, val)).toEqual(output)
})

test('head = [7,7,7,7], val = 7', () => {
  const head = {
    val: 7,
    next: {
      val: 7,
      next: {
        val: 7,
        next: {
          val: 7,
          next: null,
        },
      },
    },
  }
  const val = 7
  const output = null
  expect(removeElement(head, val)).toEqual(output)
})

test('head = [1,2,2,1], val = 2', () => {
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null,
        },
      },
    },
  }
  const val = 2
  const output = { val: 1, next: { val: 1, next: null } }
  expect(removeElement(head, val)).toEqual(output)
})
