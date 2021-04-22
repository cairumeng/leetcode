import { expect } from '@jest/globals'
import maxDepth from '../src/maximunDepthOfBinaryTree'

test(' root = [3,9,20,null,null,15,7],target 3', () => {
  const root = {
    val: 3,
    left: { val: 9 },
    right: {
      val: 20,
      left: 15,
      right: 7,
    },
  }

  expect(maxDepth(root)).toEqual(3)
})

test(' root = [3,9,20,null,null,15,7],target 3', () => {
  const root = {
    val: 3,
    left: {
      val: 9,
      left: 1,
    },
    right: {
      val: 20,
      left: 15,
      right: 7,
    },
  }

  expect(maxDepth(root)).toEqual(3)
})

test(' root = [3,9,20,null,null,15,7],target 3', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
    },
  }

  expect(maxDepth(root)).toEqual(2)
})
