import { expect } from '@jest/globals'
import getIntersectionNode from '../src/intersectionOfTwoLinkedLists'

test(' intersectionNode', () => {
  const intersectionNode = {
    val: 8,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null,
      },
    },
  }
  const headA = {
    val: 4,
    next: { val: 1, next: intersectionNode },
  }

  const headB = {
    val: 5,
    next: { val: 6, next: { val: 1, next: intersectionNode } },
  }
  const output = intersectionNode

  expect(getIntersectionNode(headA, headB)).toEqual(output)
})

test(' intersectionNode', () => {
  const intersectionNode = {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  }
  const headA = {
    val: 1,
    next: { val: 9, next: { val: 1, next: intersectionNode } },
  }

  const headB = {
    val: 3,
    next: intersectionNode,
  }

  const output = intersectionNode

  expect(getIntersectionNode(headA, headB)).toEqual(output)
})

test(' intersectionNode', () => {
  const headA = {
    val: 2,
    next: { val: 6, next: { val: 4, next: null } },
  }

  const headB = {
    val: 1,
    next: { val: 5, next: null },
  }
  const output = null
  expect(getIntersectionNode(headA, headB)).toEqual(output)
})
