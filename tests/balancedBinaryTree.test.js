import { expect } from '@jest/globals'
import isBalanced from '../src/balancedBinaryTree'

test(' root = [3,9,20,null,null,15,7]', () => {
  const root = {
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 20,
      left: {
        val: 15,
      },
      right: {
        val: 7,
      },
    },
  }

  expect(isBalanced(root)).toEqual(true)
})

test('root = [1,2,2,3,3,null,null,4,4]', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
      right: { val: 3 },
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  }

  expect(isBalanced(root)).toEqual(false)
})

test('root = [1,2,2]', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: { val: 3, left: null, right: null },
  }
  expect(isBalanced(root)).toEqual(true)
})

test('root = [1,2,2]', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: { val: 3, left: null, right: null },
  }
  expect(isBalanced(root)).toEqual(true)
})

test('root = [1,2,2,3,null,null,3,4,null,null,4]', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: 4, right: null },
      right: null,
    },
    right: { val: 2, left: null, right: { val: 3, left: null, right: 4 } },
  }
  expect(isBalanced(root)).toEqual(false)
})
