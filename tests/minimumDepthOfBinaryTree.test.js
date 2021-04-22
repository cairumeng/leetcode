import { expect } from '@jest/globals'
import minDepth from '../src/minimumDepthOfBinaryTree'

test(' root = [3,9,20,null,null,15,7]', () => {
  const root = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  }
  const target = 2

  expect(minDepth(root)).toEqual(target)
})

test(' root = [2,null,3,null,4,null,5,null,6]', () => {
  const root = {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: {
          val: 5,
          left: null,
          right: { val: 6, left: null, right: null },
        },
      },
    },
  }
  const target = 5

  expect(minDepth(root)).toEqual(target)
})

test(' root = [2,null,3,null,4,null,5,null,6]', () => {
  const root = {
    val: -9,
    left: {
      val: -3,
      left: null,
      right: {
        val: 4,
        left: {
          val: -6,
          left: null,
          right: null,
        },
        right: null,
      },
    },
    right: {
      val: 2,
      left: { val: 4, left: { val: -5, left: null, right: null }, right: null },
      right: {
        val: 0,
        left: null,
        right: null,
      },
    },
  }
  const target = 3

  expect(minDepth(root)).toEqual(target)
})
